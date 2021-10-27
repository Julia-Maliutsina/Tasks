import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"
import shortenDescr from "../utils/noteShortDescr"

const Note = ({ note, clickNote }) => (
    <ListItem divider 
        onClick={()=>clickNote(note.id, note.title, note.text, note.date)}
    >
    <ListItemText      
    primary={
        <Typography style={styles.NoteTitle}>
            {note.title} 
        </Typography>
    }          
    secondary={
        <React.Fragment>
        <Typography
            sx={{ display: 'inline-block' }}
            component="span"
            style={styles.NoteInList}
            className="shortDescr"
        >
            {shortenDescr(note.text)}
        </Typography>
            {note.date}
        </React.Fragment>
    }
    style={styles.NoteInList} />
    </ListItem>
)

Note.propTypes = {
    note: PropTypes.object,
    clickNote: PropTypes.func
}

export default Note
