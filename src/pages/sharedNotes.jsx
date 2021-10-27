import React from "react"
import Box from "@mui/material/Box"
import styles from "./styled"
import PropTypes from "prop-types"
import NoteShared from "../components/NoteShared"

const SharedNotes = ({ notes, active, sharedNoteChosen }) => (
    <div style={{ width: "100%" }}>
            <div class="chosenSharedNote" style={styles.ActiveSharedNote}>
                <h3 style={styles.SharedTitle}>
                    {active.title}
                </h3>
                <p style={styles.SharedText}>
                    {active.text}
                </p>
                <p style={styles.Date}>
                    {active.date}
                </p>
            </div>
            <div style={styles.SharedNotesGrid}>
                <Box
                sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                }}
                >
                    {notes.map((note)=><NoteShared id={note.id} title={note.title} date={note.date} text={note.text} clickSharedNote={sharedNoteChosen}/>)}
                </Box>
            </div>
  
    </div>
)

SharedNotes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    sharedNoteChosen: PropTypes.func,
}

export default SharedNotes