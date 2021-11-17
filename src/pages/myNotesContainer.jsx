import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import MESSAGES from "config/constants/messages";

import updateNotes from "../api/notesUpdate";
import useGetNotes from "../api/loadPage.js";
import createNewNote from "../api/newNote";
import deleteNote from "../api/deleteNote";
import shareNoteWithUsers from "../api/shareNote";

import MyNotes from "../components/MyNotes";

import applyNotesFilters from "../utils/applyFilters";

const MyNotesContainer = ({ user, store }) => {
  const ID_INITIAL = -1;
  const ID_MINIMAL = 0;
  const PAGE_INITIAL = 1;

  const [page, setPage] = useState(PAGE_INITIAL);
  const [notes, setNotes] = useGetNotes(user, page);

  const ACTIVE_INIT = {
    id: ID_INITIAL,
    title: MESSAGES.NOTES_INIT,
    description: "",
    createdAt: "",
  };

  const dates = notes.map((note) => note.createdAt.substr(0, 10));
  const titles = notes.map((note) => note.title);
  const uniqueDates = dates.filter(
    (item, position) => dates.indexOf(item) === position
  );
  const uniqueTitles = titles.filter(
    (item, position) => titles.indexOf(item) === position
  );

  const [active, setActive] = useState(ACTIVE_INIT);
  const [newText, changeText] = useState(active.description);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertShareOpen, setAlertShare] = useState(false);
  const [shareError, setShareError] = useState("");

  useEffect(() => {
    changeText(active.description);
  }, [active]);

  const [newNoteOpen, setOpen] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteText, setNewNoteText] = useState("");

  const [filterDateOpen, setFilterDateOpen] = useState(false);
  const [filterDatesArray, setDateFilters] = useState([]);
  const [filtersByDate, applyDatesFilter] = useState([]);

  const [filterTitleOpen, setFilterTitleOpen] = useState(false);
  const [filterTitlesArray, setTitleFilters] = useState([]);
  const [filtersByTitle, applyTitlesFilter] = useState([]);

  function showChosenNote(note) {
    setActive(note);
  }

  function saveChangedNote(newText) {
    if (active.id >= ID_MINIMAL) {
      for (let index = 0; index < notes.length; index++) {
        if (notes[index].id === active.id) {
          notes[index].description = newText;
          console.log(notes[index], active.id);
          updateNotes(notes[index], active.id, user, store);
          break;
        }
      }
      store.dispatch({
        type: "loadPage",
      });
    } else {
      setAlertOpen(true);
    }
  }

  const changeDateFilters = (event) => {
    if (event.target.checked) {
      filterDatesArray.push(event.target.name);
      setDateFilters(filterDatesArray);
    } else {
      let date = filterDatesArray.indexOf(event.target.name);
      filterDatesArray.splice(date, date);
    }
  };

  const applyDateFilters = () => {
    applyDatesFilter(filterDatesArray);
    setFilterDateOpen(false);
    localStorage.setItem("filterDatesArray", JSON.stringify(filterDatesArray));
  };

  const filterNotesByDate = () => {
    setFilterDateOpen(true);
    setDateFilters([]);
  };

  const changeTitleFilters = (event) => {
    if (event.target.checked) {
      filterTitlesArray.push(event.target.name);
      setTitleFilters(filterTitlesArray);
    } else {
      let title = filterTitlesArray.indexOf(event.target.name);
      filterTitlesArray.splice(title, title);
    }
  };

  const applyTitleFilters = () => {
    applyTitlesFilter(filterTitlesArray);
    setFilterTitleOpen(false);
  };

  const filterNotesByTitle = () => {
    setFilterTitleOpen(true);
    setTitleFilters([]);
  };

  const discardFilters = () => {
    setDateFilters([]);
    applyDatesFilter([]);
    setTitleFilters([]);
    applyTitlesFilter([]);
  };

  const addNoteOpen = () => {
    setNewNoteTitle("");
    setNewNoteText("");
    setOpen(true);
    setActive(ACTIVE_INIT);
  };

  const addNoteClose = () => {
    setOpen(false);
  };

  const addNoteSubmit = () => {
    if (newNoteTitle.length > 3 || newNoteText.length > 3) {
      createNewNote(newNoteTitle, newNoteText, user, setNotes, setPage);
      addNoteClose();
    }
  };

  function handleChange(textareaValue) {
    changeText(textareaValue);
  }

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  const handleAlertShareClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertShare(false);
  };

  const notesToDisplay = applyNotesFilters(
    filtersByDate,
    filtersByTitle,
    notes
  );
  const changePosition = (parameters) => {
    const sourceIndex = parameters.source.index;
    const destinationIndex = parameters.destination.index;
    notesToDisplay.splice(
      destinationIndex,
      0,
      notesToDisplay.splice(sourceIndex, 1)[0]
    );
  };

  const removeNote = (noteId) => {
    deleteNote(noteId, user, setNotes, setPage);
  };

  const [openShare, shareNoteOpen] = useState(false);
  const [noteToShare, setNoteToShare] = useState(ACTIVE_INIT);
  const [userEmailValue, setUser] = useState("");
  const [usersToShare, setUsersToShare] = useState([]);

  const shareNote = (note) => {
    shareNoteOpen(true);
    setNoteToShare(note);
  };

  const setUserToShare = (userEmail) => {
    setUser(userEmail);
  };

  const addUserToList = () => {
    let usersArray = usersToShare;
    usersArray.push(userEmailValue);
    setUsersToShare(usersArray);
    setUser("");
  };

  const shareNoteSubmit = () => {
    shareNoteWithUsers(
      noteToShare.id,
      usersToShare,
      user,
      setNoteToShare,
      ACTIVE_INIT,
      setUsersToShare,
      shareNoteOpen,
      setAlertShare,
      setShareError
    );
  };

  const cancelShare = () => {
    setNoteToShare(ACTIVE_INIT);
    setUsersToShare([]);
    setUser("");
    shareNoteOpen(false);
  };

  const removeUser = (emailId) => {
    let usersArray = usersToShare;
    usersArray.splice(emailId, 1);
    setUsersToShare(usersArray);
    setUser(" ");
  };

  return (
    <MyNotes
      filterNotesByDate={filterNotesByDate}
      filterNotesByTitle={filterNotesByTitle}
      filterTitleOpen={filterTitleOpen}
      filterDateOpen={filterDateOpen}
      discardFilters={discardFilters}
      setFilterDateOpen={setFilterDateOpen}
      setFilterTitleOpen={setFilterTitleOpen}
      uniqueDates={uniqueDates}
      uniqueTitles={uniqueTitles}
      changeDateFilters={changeDateFilters}
      applyDateFilters={applyDateFilters}
      changeTitleFilters={changeTitleFilters}
      applyTitleFilters={applyTitleFilters}
      addNoteOpen={addNoteOpen}
      addNoteClose={addNoteClose}
      newNoteOpen={newNoteOpen}
      setNewNoteTitle={setNewNoteTitle}
      setNewNoteText={setNewNoteText}
      addNoteSubmit={addNoteSubmit}
      showChosenNote={showChosenNote}
      notesToDisplay={notesToDisplay}
      setPage={setPage}
      page={page}
      changePosition={changePosition}
      shareNote={shareNote}
      removeNote={removeNote}
      openShare={openShare}
      noteToShare={noteToShare}
      usersToShare={usersToShare}
      removeUser={removeUser}
      setUser={setUser}
      setUserToShare={setUserToShare}
      userEmailValue={userEmailValue}
      addUserToList={addUserToList}
      cancelShare={cancelShare}
      shareNoteSubmit={shareNoteSubmit}
      active={active}
      newText={newText}
      handleChange={handleChange}
      saveChangedNote={saveChangedNote}
      alertOpen={alertOpen}
      handleAlertClose={handleAlertClose}
      alertShareOpen={alertShareOpen}
      handleAlertShareClose={handleAlertShareClose}
      shareError={shareError}
    />
  );
};

MyNotesContainer.propTypes = {
  user: PropTypes.string,
};

export default MyNotesContainer;
