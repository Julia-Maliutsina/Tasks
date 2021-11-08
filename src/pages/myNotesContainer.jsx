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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";

import Notes from "../components/NotesList";
import Save from "../components/SaveButton";
import "./App.css";
import styles from "./styled.js";

import PrimaryButton from "../components/SaveButton";

const MyNotesContainer = ({
  showChosenNote,
  saveChangedNote,
  notes,
  active,
  isNoteChosen,
  userId,
}) => {
  let text = active.text;
  const [newText, changeText] = useState(text);

  useEffect(() => {
    changeText(text);
  }, [text]);

  const [newNoteOpen, setOpen] = useState(false);

  const [newNoteTitle, setNewTitle] = useState("");
  const [newNoteText, setNewText] = useState("");

  const addNoteOpen = () => {
    setOpen(true);
  };

  const addNoteClose = () => {
    setOpen(false);
  };

  const addNoteSubmit = () => {
    let newNoteDate = new Date();
    const newNote = {
      title: newNoteTitle,
      text: newNoteText,
      date: newNoteDate.toLocaleDateString(),
    };
    console.log(newNote);
  };

  function handleChange(textareaValue) {
    changeText(textareaValue);
  }

  let alert;

  if (isNoteChosen) {
    alert = "none";
  } else {
    alert = "flex";
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
              style={{ display: "inline-block" }}
            >
              <Button id="filterButton">Title</Button>
              <Button id="filterButton">Date</Button>
              <Button id="filterButtonClicked" disabled>
                Default
              </Button>
            </ButtonGroup>
            <h4
              style={{
                height: "36px",
                borderLeft: "1px solid #ccc",
                padding: "5px 0px 5px 15px",
                marginLeft: "20px",
              }}
            >
              Add note:
            </h4>
            <IconButton style={{ height: 29, width: 29 }} onClick={addNoteOpen}>
              <AddCircleIcon color="info" fontSize="large" />
            </IconButton>
            <Dialog open={newNoteOpen} onClose={addNoteClose}>
              <DialogTitle style={styles.newNote}>New note</DialogTitle>
              <DialogContent>
                <DialogContentText
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "5px",
                    fontSize: "14px",
                  }}
                >
                  Enter title and description of your new note.
                </DialogContentText>
                <TextareaAutosize
                  id="title"
                  placeholder="Title"
                  className="activeNote"
                  minRows={null}
                  maxLength={40}
                  style={styles.newNoteTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <TextareaAutosize
                  id="text"
                  placeholder="Description"
                  className="activeNote"
                  minRows={null}
                  maxLength={1200}
                  style={styles.newNoteText}
                  onChange={(e) => setNewText(e.target.value)}
                />
              </DialogContent>
              <DialogActions
                style={{
                  margin: "0px 20px 15px 0px",
                  height: "40px",
                  padding: "0px",
                }}
              >
                <Button style={styles.cancelButton} onClick={addNoteClose}>
                  <CancelIcon style={{ marginRight: "5px" }} />
                  Cancel
                </Button>
                <PrimaryButton
                  title="Save note"
                  buttonFunction={() => {
                    addNoteSubmit();
                    addNoteClose();
                  }}
                  newText
                />
              </DialogActions>
            </Dialog>
          </div>
          <Notes userId={userId} noteChosen={showChosenNote} />
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
            style={{
              display: alert,
              position: "absolute",
              top: "437px",
              left: "200px",
              height: "40px",
              padding: "3px 10px 3px 10px",
              width: "400px",
            }}
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
