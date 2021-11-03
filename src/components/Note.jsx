import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import PropTypes from "prop-types"

import styles from "../pages/styled"
import shortenDescription from "../utils/noteShortDescription"

const Note = ({ note, displayChosenNote }) => {
  return (
    <ListItemButton
      divider
      onClick={() => {
        displayChosenNote(note.id)
      }}
    >
      <ListItemText
        primary={<Typography style={styles.noteTitle}>{note.title}</Typography>}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline-block" }}
              component="span"
              style={styles.noteInList}
              className="shortDescription"
            >
              {shortenDescription(note.text)}
            </Typography>
            {note.date}
          </React.Fragment>
        }
        style={styles.noteInList}
      />
    </ListItemButton>
  )
}
Note.propTypes = {
  note: PropTypes.object,
  displayChosenNote: PropTypes.func,
}

export default Note
