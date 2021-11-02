import React from "react"
import List from "@mui/material/List"
import PropTypes from "prop-types"
import Alert from '@mui/material/Alert'

import MESSAGES from "../../src/config/constants/messages"

import Note from "./Note"
import styles from "../pages/styled"

const Notes = ({ notes, noteChosen }) => (
  <div style={styles.allNotes}>
    {notes.length===0 ?
    <Alert variant="filled" severity="info" id="saveNoteError" style={styles.noNotes}>{MESSAGES.NO_NOTES}</Alert>
      : <List>
        {notes.map((note) => (
          <Note note={note} displayChosenNote={noteChosen} />
        ))}
      </List>
    }
  </div>
)

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  noteChosen: PropTypes.func,
}

export default Notes
