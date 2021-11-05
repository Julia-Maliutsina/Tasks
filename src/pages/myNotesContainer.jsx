import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { ButtonGroup, Button, IconButton, Icon } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useEffect } from "react";

import Notes from "../components/NotesList";
import Save from "../components/SaveButton";
import "./App.css";
import styles from "./styled.js";

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
          <div class="buttonsNotes">
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
            <IconButton style={{ height: 29, width: 29 }}>
              <AddCircleIcon color="info" fontSize="large" />
            </IconButton>
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
              style={{ height: 300 }}
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
