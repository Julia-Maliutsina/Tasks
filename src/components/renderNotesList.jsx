import React from "react"
import List from "@mui/material/List"
import Note from "./renderNote"
import styles from "../styled"
import PropTypes from "prop-types"

function Notes(props) {
    return (
        <div style={styles.AllNotes}>
            <List>
                {props.notes.map(note =>{
                return <Note note={note}/>
                }
                    )}
            </List>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object)
}

export default Notes