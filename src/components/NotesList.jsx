import React from "react";
import List from "@mui/material/List";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { useQuery } from "react-query";

import MESSAGES from "../../src/config/constants/messages";

import Note from "./Note";
import styles from "../pages/styled";

const Notes = ({ userId, noteChosen }) => {
  const { data, isSuccess } = useQuery("shared", () =>
    fetch("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542").then(
      (res) => res.json()
    )
  );

  return (
    <div style={styles.allNotes}>
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
        <List>
          {isSuccess &&
            data[userId].myNotes.map((note) => (
              <Note note={note} displayChosenNote={noteChosen} />
            ))}
        </List>
      )}
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  noteChosen: PropTypes.func,
};

export default Notes;
