import React from "react";
import { IconButton, Typography, ListItemText, ListItemButton, ListItem } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import styles from "pages/styled";
import shortenDescription from "utils/noteShortDescription";
import toLocalDate from "utils/toLocalDate";

const Note = ({ note, displayChosenNote, shareNote, setNoteToRemove }) => (
  <ListItem divider>
    <ListItemButton
      onClick={() => {
        displayChosenNote(note);
      }}
    >
      <ListItemText
        primary={<Typography style={styles.noteTitle}>{note.title}</Typography>}
        secondary={
          <React.Fragment>
            <Typography sx={styles.inlineBlock} component="span" style={styles.noteInList} className="shortDescription">
              {shortenDescription(note.description)}
            </Typography>
            {toLocalDate(note.createdAt)}
          </React.Fragment>
        }
        style={styles.noteInList}
      />
    </ListItemButton>
    <IconButton onClick={() => shareNote(note)} color="inherit" component="span">
      <IosShareIcon style={styles.shareIcon} />
    </IconButton>
    <IconButton
      onClick={() => {
        setNoteToRemove(note.id);
      }}
      color="inherit"
      component="span"
    >
      <DeleteIcon style={styles.deleteIcon} />
    </IconButton>
  </ListItem>
);
Note.propTypes = {
  note: PropTypes.object,
  displayChosenNote: PropTypes.func,
  shareNote: PropTypes.func,
  setNoteToRemove: PropTypes.func,
};
export default Note;
