import React from "react";
import {
  IconButton,
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import styles from "../../src/pages/styled";
import shortenDescription from "../../src/utils/noteShortDescription";

const Note = ({ note, displayChosenNote, shareNote, removeNote }) => {
  return (
    <ListItem divider>
      <ListItemButton
        onClick={() => {
          displayChosenNote(note);
        }}
      >
        <ListItemText
          primary={
            <Typography style={styles.noteTitle}>{note.title}</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline-block" }}
                component="span"
                style={styles.noteInList}
                className="shortDescription"
              >
                {shortenDescription(note.description)}
              </Typography>
              {note.createdAt.substr(0, 10)}
            </React.Fragment>
          }
          style={styles.noteInList}
        />
      </ListItemButton>
      <IconButton
        onClick={() => shareNote(note)}
        color="inherit"
        component="span"
      >
        <IosShareIcon style={styles.shareIcon} />
      </IconButton>
      <IconButton
        onClick={() => removeNote(note.id)}
        color="inherit"
        component="span"
      >
        <DeleteIcon style={styles.deleteIcon} />
      </IconButton>
    </ListItem>
  );
};
Note.propTypes = {
  note: PropTypes.object,
  displayChosenNote: PropTypes.func,
};

export default Note;
