import React from "react"
import List from "@mui/material/List"
import Note from "./Note"
import styles from "../pages/styled"
import PropTypes from "prop-types"
import { ListItem } from "@mui/material"

function Notes(props) {
    return (
        <div style={styles.AllNotes}>
            <List>
                {props.notes.map(note =>{
                    return <Note note={note} clickNote={props.noteChosen}/>
                })}
            </List>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    noteChosen: PropTypes.func
}

export default Notes