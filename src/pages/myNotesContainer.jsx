import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";

import INIT from "config/constants/initial";
import updateNotes from "api/notesUpdate";
import useGetNotes from "api/loadPage.js";
import NotesListContainer from "components/myNotes/NotesListContainer";
import MyActiveNote from "components/myNotes/MyActiveNote";
import ButtonsNotesContainer from "components/myNotes/actions/ButtonsNotesContainer";
import applyNotesFilters from "utils/applyFilters";
import styles from "pages/styled";

const MyNotesContainer = ({ user, store }) => {
  const [page, setPage] = useState(INIT.PAGE);
  const [notes, setNotes] = useGetNotes(user, page);
  const [active, setActive] = useState(INIT.ACTIVE);
  const [newText, changeText] = useState(active.description);
  const [alertOpen, setAlertOpen] = useState(false);
  const [filtersByDate, applyDatesFilter] = useState([]);
  const [filtersByTitle, applyTitlesFilter] = useState([]);
  useEffect(() => {
    changeText(active.description);
  }, [active]);
  const dates = notes.map((note) => note.createdAt.substr(0, 10));
  const titles = notes.map((note) => note.title);
  const uniqueDates = dates.filter((item, position) => dates.indexOf(item) === position);
  const uniqueTitles = titles.filter((item, position) => titles.indexOf(item) === position);
  function showChosenNote(note) {
    setActive(note);
  }
  function saveChangedNote(newText) {
    if (active.id >= INIT.ID_MINIMAL) {
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
  function handleChange(textareaValue) {
    changeText(textareaValue);
  }
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  const notesToDisplay = applyNotesFilters(filtersByDate, filtersByTitle, notes);
  const changePosition = (parameters) => {
    const sourceIndex = parameters.source.index;
    const destinationIndex = parameters.destination.index;
    notesToDisplay.splice(destinationIndex, 0, notesToDisplay.splice(sourceIndex, 1)[0]);
  };
  return (
    <div style={styles.maxWidth}>
      <Box sx={styles.myNotesGrid}>
        <div>
          <ButtonsNotesContainer
            user={user}
            uniqueDates={uniqueDates}
            uniqueTitles={uniqueTitles}
            applyDatesFilter={applyDatesFilter}
            applyTitlesFilter={applyTitlesFilter}
            setActive={setActive}
            setNotes={setNotes}
            setPage={setPage}
          />
          <NotesListContainer
            user={user}
            displayChosenNote={showChosenNote}
            notesToDisplay={notesToDisplay}
            setNotes={setNotes}
            setPage={setPage}
            page={page}
            changePosition={changePosition}
          />
        </div>
        <MyActiveNote
          active={active}
          newText={newText}
          handleChange={handleChange}
          alertOpen={alertOpen}
          saveChangedNote={saveChangedNote}
          handleAlertClose={handleAlertClose}
        />
      </Box>
    </div>
  );
};

MyNotesContainer.propTypes = {
  user: PropTypes.string,
};

export default MyNotesContainer;
