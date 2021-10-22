import React from "react"
import List from "@mui/material/List"
import Note from "./Note"
import styles from "../pages/styled"
import PropTypes from "prop-types"
import myMap from "../utils/mapLists.js"

const Notes = ({ notes, noteChosen }) => (
    <div style={styles.AllNotes}>
        <List>
        {myMap( notes, (note) => <Note note={note} clickNote={noteChosen}/>)}
        </List>
    </div>
)

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    noteChosen: PropTypes.func
}

export default Notes