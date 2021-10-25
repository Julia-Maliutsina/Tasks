import React from "react"
import Box from "@mui/material/Box"
import styles from "./styled"
import PropTypes from "prop-types"
import NoteShared from "../components/NoteShared"
import myMap from "../utils/mapLists.js"

const SharedNotes = ({ notes, sharedNoteChosen }) => (
    <div style={{ width: "100%" }}>

            <div class="chosenSharedNote" style={styles.ActiveSharedNote}>
                Select note to display
            </div>
            <div style={styles.SharedNotesGrid}>
                <Box
                sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                }}
                >
                  {myMap(notes,(note) => <NoteShared note={note} clickSharedNote={sharedNoteChosen}/>)}
                </Box>
            </div>
  
    </div>
)

SharedNotes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    sharedNoteChosen: PropTypes.func,
}

export default SharedNotes