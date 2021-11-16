import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ButtonGroup,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  Snackbar,
  ListItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";

import MESSAGES from "../../src/config/constants/messages";
import updateNotes from "../../src/api/notesUpdate";
import useGetNotes from "../api/loadPage.js";

import Notes from "../../src/components/NotesList";
import Save from "../../src/components/SaveButton";
import "../../src/pages/App.css";
import styles from "../../src/pages/styled.js";
import createNewNote from "../../src/api/newNote";
import applyNotesFilters from "../../src/utils/applyFilters";

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

  const removeNote = (noteId) => {};

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
    console.log(noteToShare, usersToShare);
    setNoteToShare(ACTIVE_INIT);
    setUsersToShare([]);
    shareNoteOpen(false);
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
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "36% 60%",
          gap: 1,
        }}
      >
        <div>
          <div className="buttonsNotes">
            <h4>Filter by: </h4>
            <ButtonGroup variant="contained" style={styles.buttonGroup}>
              <Button id="filterButton" onClick={filterNotesByTitle}>
                Title
              </Button>
              <Button id="filterButton" onClick={filterNotesByDate}>
                Date
              </Button>
              <Button id="filterButton" onClick={discardFilters}>
                Show all
              </Button>
            </ButtonGroup>
            <h4 style={styles.addNote}>Add note:</h4>
            <IconButton style={styles.addButtonIcon} onClick={addNoteOpen}>
              <AddCircleIcon color="info" fontSize="large" />
            </IconButton>
            <Dialog open={newNoteOpen} onClose={addNoteClose}>
              <DialogTitle style={styles.newNote}>New note</DialogTitle>
              <DialogContent>
                <DialogContentText style={styles.addNoteMessage}>
                  Enter title and description of your new note.
                </DialogContentText>
                <TextareaAutosize
                  id="title"
                  placeholder="Title"
                  className="activeNote"
                  minRows={null}
                  maxLength={40}
                  minLength={1}
                  style={styles.newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                />
                <TextareaAutosize
                  id="text"
                  placeholder="Description"
                  className="activeNote"
                  minRows={null}
                  maxLength={500}
                  minLength={1}
                  style={styles.newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                />
              </DialogContent>
              <DialogActions style={styles.addNoteButtons}>
                <Button style={styles.cancelButton} onClick={addNoteClose}>
                  <CancelIcon style={styles.saveIcon} />
                  Cancel
                </Button>
                <Button
                  style={styles.primaryButton}
                  variant="contained"
                  onClick={addNoteSubmit}
                >
                  <SaveIcon style={styles.saveIcon} />
                  Save note
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={filterDateOpen}
              onClose={() => setFilterDateOpen(false)}
            >
              <DialogTitle style={styles.newNote}>Filter by dates</DialogTitle>
              <DialogContent>
                <DialogContentText style={styles.addNoteMessage}>
                  Choose dates to display
                </DialogContentText>
                <FormControl
                  style={{ height: "300px", width: "200px", overflow: "auto" }}
                >
                  <FormGroup>
                    {uniqueDates.map((date, i) => (
                      <FormControlLabel
                        control={
                          <Checkbox onChange={changeDateFilters} name={date} />
                        }
                        label={date}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </DialogContent>
              <DialogActions style={styles.addNoteButtons}>
                <Button
                  style={styles.cancelFilter}
                  onClick={() => setFilterDateOpen(false)}
                >
                  Cancel
                </Button>
                <Button style={styles.applyFilter} onClick={applyDateFilters}>
                  Filter notes
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={filterTitleOpen}
              onClose={() => setFilterTitleOpen(false)}
            >
              <DialogTitle style={styles.newNote}>Filter by titles</DialogTitle>
              <DialogContent>
                <DialogContentText style={styles.addNoteMessage}>
                  Choose notes to display
                </DialogContentText>
                <FormControl style={styles.filters}>
                  <FormGroup>
                    {uniqueTitles.map((title, i) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={changeTitleFilters}
                            name={title}
                          />
                        }
                        label={title}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </DialogContent>
              <DialogActions style={styles.addNoteButtons}>
                <Button
                  style={styles.cancelFilter}
                  onClick={() => setFilterTitleOpen(false)}
                >
                  Cancel
                </Button>
                <Button style={styles.applyFilter} onClick={applyTitleFilters}>
                  Filter notes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Notes
            noteChosen={showChosenNote}
            notesToDisplay={notesToDisplay}
            setPage={setPage}
            page={page}
            changePosition={changePosition}
            shareNote={shareNote}
            removeNote={removeNote}
          />
        </div>
        <Dialog open={openShare} onClose={() => {}}>
          <DialogTitle style={styles.shareNote}>Share note</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ width: 300 }}>
              <h4 style={styles.shareNoteTitles}>Title:</h4>
              <p style={styles.shareNoteText}>{noteToShare.title}</p>
              <h4 style={styles.shareNoteTitles}>Description:</h4>
              <p style={styles.shareNoteText}>{noteToShare.description}</p>
              <h4 style={styles.shareNoteTitles}>Date:</h4>
              <p style={styles.shareNoteText}>
                {noteToShare.createdAt.substr(0, 10)}
              </p>
            </DialogContentText>
            <DialogContentText style={styles.shareNoteTitles}>
              Share with:
            </DialogContentText>
            {usersToShare.map((email, emailId) => (
              <ListItem style={styles.emailsList}>
                <span style={{ width: "95%" }}>{email}</span>
                <IconButton
                  style={{ width: "10px", height: "10px" }}
                  onClick={(e) => removeUser(emailId)}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
            <TextareaAutosize
              id="userToShare"
              placeholder="user@gmail.com"
              value={userEmailValue}
              className="activeNote"
              minRows={null}
              maxLength={40}
              minLength={5}
              style={styles.userToShare}
              onFocus={() => setUser("")}
              onChange={(e) => setUserToShare(e.target.value)}
            />
            <Button style={styles.addUsers} onClick={addUserToList}>
              <AddIcon
                fontSize="small"
                color="inherit"
                style={{ display: "inline" }}
              />
              <span>Add</span>
            </Button>
          </DialogContent>
          <DialogActions style={styles.addNoteButtons}>
            <Button style={styles.cancelShareButton} onClick={cancelShare}>
              <CancelIcon style={styles.saveIcon} />
              Cancel
            </Button>
            <Button
              style={styles.primaryButton}
              variant="contained"
              onClick={() => shareNoteSubmit}
            >
              <IosShareIcon style={styles.saveIcon} />
              Share
            </Button>
          </DialogActions>
        </Dialog>
        <div style={{ position: "relative" }}>
          <div className="chosenNote" style={styles.activeNote}>
            <h3 style={styles.title}>{active.title}</h3>
            <TextareaAutosize
              id="displayedNote"
              className="activeNote"
              minRows={null}
              maxLength={500}
              style={styles.text}
              value={newText}
              onChange={(event) => handleChange(event.target.value)}
            />
            <p style={styles.date}>{active.createdAt.substr(0, 10)}</p>
          </div>
          <Save
            title={"Save Changes"}
            buttonFunction={saveChangedNote}
            newText={newText}
          />
          <Snackbar
            open={alertOpen}
            autoHideDuration={3000}
            onClose={handleAlertClose}
          >
            <Alert
              onClose={handleAlertClose}
              severity="info"
              sx={{ width: "100%" }}
            >
              {MESSAGES.NOT_CHOSEN}
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </div>
  );
};

MyNotesContainer.propTypes = {
  user: PropTypes.string,
};

export default MyNotesContainer;
