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
  FormControl
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import MESSAGES from "../../src/config/constants/messages"

import Notes from "../../src/components/NotesList";
import Save from "../../src/components/SaveButton";
import PrimaryButton from "../../src/components/SaveButton";
import "../../src/pages/App.css";
import styles from "../../src/pages/styled.js";

const MyNotesContainer = ({
  showChosenNote,
  saveChangedNote,
  id,
  userId,
}) => {

  const { data, isSuccess, isLoading } = useQuery("shared", () =>
    fetch("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542").then(
      (res) => res.json()
    )
  );
  let notes=[];
  let active = MESSAGES.NOTES_INIT;
  if (isSuccess) {
    notes = data[userId].myNotes
    if (id>=0) {
      active = notes[id];
    }
  };

  const text = active.text;
  const [newText, changeText] = useState(text);

  useEffect(() => {
    changeText(text);
  }, [text]);

  const [newNoteOpen, setOpen] = useState(false);
  const [newNoteTitle, setNewTitle] = useState("");
  const [newNoteText, setNewText] = useState("");

  const [filterDateOpen, setFilterDateOpen] = useState(false)
  const [filterDatesArray, setDateFilters] = useState([])
  const [filtersByDate, applyDatesFilter] = useState([])

  const [filterTitleOpen, setFilterTitleOpen] = useState(false)
  const [filterTitlesArray, setTitleFilters] = useState([])
  const [filtersByTitle, applyTitlesFilter] = useState([])

  const changeDateFilters = (event) => {
    if (event.target.checked) {
      filterDatesArray.push(event.target.name);
      setDateFilters(filterDatesArray);
    } else {
      let date = filterDatesArray.indexOf(event.target.name);
      filterDatesArray.splice(date,date)
    }
    console.log(filterDatesArray)
  }

  const applyDateFilters = () => {
    applyDatesFilter(filterDatesArray);
    setFilterDateOpen(false);
    localStorage.setItem("filterDatesArray", JSON.stringify(filterDatesArray))
  }

  const filterNotesByDate = () => {
    setFilterDateOpen(true); 
    setDateFilters([]);
  }

  const changeTitleFilters = (event) => {
    if (event.target.checked) {
      filterTitlesArray.push(event.target.name);
      setTitleFilters(filterTitlesArray);
    } else {
      let title = filterTitlesArray.indexOf(event.target.name);
      filterTitlesArray.splice(title,title);
    }
    console.log(filterTitlesArray)
  }

  const applyTitleFilters = () => {
    applyTitlesFilter(filterTitlesArray);
    setFilterTitleOpen(false);
  }

  const filterNotesByTitle = () => {
    setFilterTitleOpen(true); 
    setTitleFilters([]);
  }

  const discardFilters = () => {
    setDateFilters([]); 
    applyDatesFilter([]); 
    setTitleFilters([]); 
    applyTitlesFilter([])
  }

  const addNoteOpen = () => {
    setOpen(true);
  };

  const addNoteClose = () => {
    setOpen(false);
  };

  const addNoteSubmit = () => {
    let newNoteDate = new Date();
    if (newNoteTitle.length===0 || newNoteText===0) {

    }
    else {
      const newNote = {
        title: newNoteTitle,
        text: newNoteText,
        date: newNoteDate.toLocaleDateString(),
      };
      addNoteClose();
    }
  };

  function handleChange(textareaValue) {
    changeText(textareaValue);
  }

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
            <ButtonGroup
              variant="contained"
              style={styles.buttonGroup}
            >
              <Button id="filterButton" onClick={filterNotesByTitle}>Title</Button>
              <Button id="filterButton" onClick={filterNotesByDate}>Date</Button>
              <Button id="filterButton" onClick={discardFilters}>
                Show all
              </Button>
            </ButtonGroup>
            <h4
              style={styles.addNote}
            >
              Add note:
            </h4>
            <IconButton style={styles.addButtonIcon} onClick={addNoteOpen}>
              <AddCircleIcon color="info" fontSize="large" />
            </IconButton>
            <Dialog open={newNoteOpen} onClose={addNoteClose}>
              <DialogTitle style={styles.newNote}>New note</DialogTitle>
              <DialogContent>
                <DialogContentText
                  style={styles.addNoteMessage}
                >
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
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <TextareaAutosize
                  id="text"
                  placeholder="Description"
                  className="activeNote"
                  minRows={null}
                  maxLength={1200}
                  minLength={1}
                  style={styles.newNoteText}
                  onChange={(e) => setNewText(e.target.value)}
                />
              </DialogContent>
              <DialogActions
                style={styles.addNoteButtons}
              >
                <Button style={styles.cancelButton} onClick={addNoteClose}>
                  <CancelIcon style={styles.saveIcon} />
                  Cancel
                </Button>
                <PrimaryButton
                  title="Save note"
                  buttonFunction={addNoteSubmit}
                  newText
                />
              </DialogActions>
            </Dialog>
            <Dialog open={filterDateOpen} onClose={()=>setFilterDateOpen(false)}>
              <DialogTitle style={styles.newNote}>Filter by dates</DialogTitle>
              <DialogContent>
                <DialogContentText
                  style={styles.addNoteMessage}
                >
                  Choose dates to display
                </DialogContentText>
                <FormControl style={{height: "300px", width: "200px", overflow: "auto"}}>
                <FormGroup>
                  {notes.map((note, i) => (                     
                  <FormControlLabel
                    control={
                      <Checkbox onChange={changeDateFilters} name={note.date} />
                    }
                    label={note.date}
                  />
                  ))}
                </FormGroup>
                </FormControl>
              </DialogContent>
              <DialogActions
                style={styles.addNoteButtons}
              >
                <Button style={styles.cancelFilter} onClick={()=>setFilterDateOpen(false)}>
                  Cancel
                </Button>
                <Button style={styles.applyFilter} onClick={applyDateFilters}>
                  Filter notes
                </Button>
              </DialogActions>
            </Dialog>          
            <Dialog open={filterTitleOpen} onClose={()=>setFilterTitleOpen(false)}>
              <DialogTitle style={styles.newNote}>Filter by titles</DialogTitle>
              <DialogContent>
                <DialogContentText
                  style={styles.addNoteMessage}
                >
                  Choose notes to display
                </DialogContentText>
                <FormControl style={styles.filters}>
                <FormGroup>
                  {notes.map((note, i) => (                     
                  <FormControlLabel
                    control={
                      <Checkbox onChange={changeTitleFilters} name={note.title} />
                    }
                    label={note.title}
                  />
                  ))}
                </FormGroup>
                </FormControl>
              </DialogContent>
              <DialogActions
                style={styles.addNoteButtons}
              >
                <Button style={styles.cancelFilter} onClick={()=>setFilterTitleOpen(false)}>
                  Cancel
                </Button>
                <Button style={styles.applyFilter} onClick={applyTitleFilters}>
                  Filter notes
                </Button>
              </DialogActions>
            </Dialog>          
          </div>
          <Notes userId={userId} noteChosen={showChosenNote} allNotes={notes} isLoading={isLoading} isSuccess={isSuccess} filterDates={filtersByDate} filterTitles={filtersByTitle} />
        </div>
        <div style={{ position: "relative" }}>
          <div className="chosenNote" style={styles.activeNote}>
            <h3 style={styles.title}>{active.title}</h3>
            <TextareaAutosize
              id="displayedNote"
              className="activeNote"
              minRows={null}
              maxLength={1200}
              style={styles.text}
              value={newText}
              onChange={(event) => handleChange(event.target.value)}
            />
            <p style={styles.date}>{active.date}</p>
          </div>
          <Save
            title={"Save Changes"}
            buttonFunction={saveChangedNote}
            newText={newText}
          />
          <Alert
            variant="filled"
            severity="info"
            id="saveNoteError"
            style={styles.alertNoteNotChosen}
          >
            Select note to save!
          </Alert>
        </div>
      </Box>
    </div>
  );
};

MyNotesContainer.propTypes = {
  showChosenNote: PropTypes.func,
  saveChangedNote: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
};

export default MyNotesContainer;
