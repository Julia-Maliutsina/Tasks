import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import PropTypes from "prop-types";

import styles from "pages/styled";
import shortenDescription from "utils/noteShortDescription";
import toLocalDate from "utils/toLocalDate";

const NoteShared = ({ note, displaySharedNote }) => (
  <div style={styles.sharedFullHeight}>
    <Card
      onClick={() => displaySharedNote(note)}
      className="sharedNote"
      style={styles.sharedNoteCard}
      data-testid="sharedNoteInList"
    >
      <ListItemButton>
        <CardContent>
          <Typography style={styles.noteTitle}>{note.title}</Typography>
          <Typography sx={styles.block} component="span" style={styles.noteInListShared} className="shortDescription">
            {shortenDescription(note.description)}
          </Typography>
          <Typography variant="body2">{toLocalDate(note.createdAt)}</Typography>
          <Typography style={styles.sharedAuthor}>shared by: {note.author}</Typography>
        </CardContent>
      </ListItemButton>
    </Card>
  </div>
);
NoteShared.propTypes = {
  note: PropTypes.object,
  displaySharedNote: PropTypes.func,
};
export default NoteShared;
