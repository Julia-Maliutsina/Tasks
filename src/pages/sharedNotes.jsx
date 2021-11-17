import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

import MESSAGES from "../../src/config/constants/messages";
import styles from "../../src/pages/styled";
import useGetSharedNotes from "../../src/api/sharedNotes";

import NoteShared from "../components/NoteShared";

const SharedNotes = ({ userId }) => {
  const { data, isSuccess, isLoading } = useGetSharedNotes();

  let sharedNotes = [];
  if (isSuccess && data[userId]) {
    sharedNotes = data[userId].sharedNotes;
  }

  const [sharedChosenNote, displaySharedNote] = useState({
    title: MESSAGES.NOTES_INIT,
    text: "",
    date: "",
  });

  function showChosenSharedNote(id) {
    displaySharedNote(data[userId].sharedNotes[id]);
  }

  return (
    <div style={styles.maxWidth}>
      <div className="chosenSharedNote" style={styles.activeSharedNote}>
        <h3 style={styles.sharedTitle}>{sharedChosenNote.title}</h3>
        <p style={styles.sharedText}>{sharedChosenNote.text}</p>
        <p style={styles.date}>{sharedChosenNote.date}</p>
      </div>
      <div style={styles.sharedNotesGrid}>
        {isLoading && (
          <CircularProgress
            style={styles.progressCircle}
            size={40}
            thickness={4}
            value={100}
            disableShrink
          />
        )}
        {isSuccess && !data[userId] ? (
          <Alert
            variant="filled"
            severity="info"
            id="saveNoteError"
            style={styles.noNotes}
          >
            {MESSAGES.NO_NOTES}
          </Alert>
        ) : (
          <Box
            sx={styles.shareGrid}
          >
            {isSuccess &&
              sharedNotes.map((note, i) => {
                return (
                  <NoteShared
                    id={i}
                    note={note}
                    displaySharedNote={showChosenSharedNote}
                  />
                );
              })}
          </Box>
        )}
      </div>
    </div>
  );
};
SharedNotes.propTypes = {
  userId: PropTypes.number,
};

export default SharedNotes;
