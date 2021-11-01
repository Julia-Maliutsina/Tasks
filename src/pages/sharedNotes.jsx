import React from "react"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"

import styles from "./styled"
import NoteShared from "../components/NoteShared"

const SharedNotes = ({ notes, active, sharedNoteChosen }) => (
  <div style={{ width: "100%" }}>
    <div className="chosenSharedNote" style={styles.activeSharedNote}>
      <h3 style={styles.sharedTitle}>{active.title}</h3>
      <p style={styles.sharedText}>{active.text}</p>
      <p style={styles.date}>{active.date}</p>
    </div>
    <div style={styles.sharedNotesGrid}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
        }}
      >
        {notes.map((note) => (
          <NoteShared
            id={note.id}
            title={note.title}
            date={note.date}
            text={note.text}
            displaySharedNote={sharedNoteChosen}
          />
        ))}
      </Box>
    </div>
  </div>
)

SharedNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  sharedNoteChosen: PropTypes.func,
}

export default SharedNotes
