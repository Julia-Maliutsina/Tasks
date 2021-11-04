import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { useQuery } from "react-query";

import MESSAGES from "../../src/config/constants/messages";

import styles from "./styled";
import NoteShared from "../components/NoteShared";

const SharedNotes = ({ active, sharedNoteChosen, userId }) => {
  const { data, isSuccess, error } = useQuery("shared", () =>
    fetch("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542").then(
      (res) => res.json()
    )
  );
  return (
    <div style={{ width: "100%" }}>
      <div className="chosenSharedNote" style={styles.activeSharedNote}>
        <h3 style={styles.sharedTitle}>{active.title}</h3>
        <p style={styles.sharedText}>{active.text}</p>
        <p style={styles.date}>{active.date}</p>
      </div>
      <div style={styles.sharedNotesGrid}>
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
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
            }}
          >
            {isSuccess &&
              data[userId].sharedNotes.map((note) => (
                <NoteShared
                  id={note.id}
                  title={note.title}
                  date={note.date}
                  text={note.text}
                  displaySharedNote={sharedNoteChosen}
                />
              ))}
          </Box>
        )}
      </div>
    </div>
  );
};
SharedNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  sharedNoteChosen: PropTypes.func,
};

export default SharedNotes;
