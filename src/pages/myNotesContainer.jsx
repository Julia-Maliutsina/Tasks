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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { useState, useEffect } from "react";

import MESSAGES from "../../src/config/constants/messages";
import upgradeNotes from "../../src/api/notesUpdate";
import useGetNotes from "../api/loadPage.js";

import Notes from "../../src/components/NotesList";
import Save from "../../src/components/SaveButton";
import "../../src/pages/App.css";
import styles from "../../src/pages/styled.js";
import createNewNote from "../../src/api/newNote";

const MyNotesContainer = ({ user, store }) => {
  const ID_INITIAL = -1;
  const ID_MINIMAL = 0;
  const PAGE_INITIAL = 1;

  const [page, setPage] = useState(PAGE_INITIAL);
  const [notes, setNotes] = useGetNotes(user, page);

  const ACTIVE_INIT = {
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

  const [activeId, changeActive] = useState([ID_INITIAL]);
  const [active, setActive] = useState(ACTIVE_INIT);

  useEffect(() => {
    if (notes && activeId >= 0) {
      setActive(notes[activeId]);
    }
  }, [activeId, notes]);

  const [alertOpen, setAlertOpen] = useState(false);
  const [newText, changeText] = useState(active.description);

  useEffect(() => {
    changeText(active.description);
  }, [active.description]);

  const [newNoteOpen, setOpen] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteText, setNewNoteText] = useState("");

  const [filterDateOpen, setFilterDateOpen] = useState(false);
  const [filterDatesArray, setDateFilters] = useState([]);
  const [filtersByDate, applyDatesFilter] = useState([]);

  const [filterTitleOpen, setFilterTitleOpen] = useState(false);
  const [filterTitlesArray, setTitleFilters] = useState([]);
  const [filtersByTitle, applyTitlesFilter] = useState([]);

  function showChosenNote(id) {
    changeActive(id);
  }

  function saveChangedNote(newText) {
    if (activeId >= ID_MINIMAL) {
      notes[activeId].description = newText;
      upgradeNotes(notes[activeId], activeId, user, store);
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
    changeActive(ID_INITIAL);
    setActive(ACTIVE_INIT);
  };

  const addNoteClose = () => {
    setOpen(false);
  };

  const addNoteSubmit = () => {
    console.log(newNoteTitle, newNoteText);
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
            loadedNotes={notes}
            filterDates={filtersByDate}
            filterTitles={filtersByTitle}
            setPage={setPage}
            page={page}
          />
        </div>
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
