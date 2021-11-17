import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import MESSAGES from "config/constants/messages";

import NoteShared from "../components/NoteShared";

import styles from "../pages/styled";

const SharedList = ({
  sharedNotes,
  sharedChosenNote,
  showChosenSharedNote,
}) => (
  <div style={styles.maxWidth}>
    <div className="chosenSharedNote" style={styles.activeSharedNote}>
      <h3 style={styles.sharedTitle}>{sharedChosenNote.title}</h3>
      <p style={styles.sharedText}>{sharedChosenNote.description}</p>
      <p style={styles.date}>{sharedChosenNote.createdAt.substr(0, 10)}</p>
    </div>
    <div style={styles.sharedNotesGrid}>
      {sharedNotes.length === 0 ? (
        <Alert
          variant="filled"
          severity="info"
          id="saveNoteError"
          style={styles.noSharedNotes}
        >
          {MESSAGES.NO_SHARED_NOTES}
        </Alert>
      ) : (
        <Box sx={styles.shareGrid}>
          {sharedNotes.map((note, i) => {
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

export default SharedList;
