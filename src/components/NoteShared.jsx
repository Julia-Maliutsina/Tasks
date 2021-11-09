import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import PropTypes from "prop-types";

import styles from "../../src/pages/styled";
import shortenDescription from "../../src/utils/noteShortDescription";

const NoteShared = ({ id, title, text, date, displaySharedNote }) => (
  <div>
    <Card
      sx={{
        minWidth: "250px",
      }}
      onClick={() =>
        displaySharedNote(id, styles.activeCardGradient, styles.focusShadow)
      }
      className="sharedNote"
      style={styles.sharedNoteCard}
    >
      <ListItemButton>
        <CardContent>
          <Typography style={styles.noteTitle}>{title}</Typography>
          <Typography
            sx={{ display: "block" }}
            component="span"
            style={styles.noteInListShared}
            className="shortDescription"
          >
            {shortenDescription(text)}
          </Typography>
          <Typography variant="body2">{date}</Typography>
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
