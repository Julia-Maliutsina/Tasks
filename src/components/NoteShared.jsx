import React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import PropTypes from "prop-types"

import styles from "../pages/styled"
import shortenDescription from "../utils/noteShortDescription"

const NoteShared = ({ id, title, text, date, displaySharedNote }) => (
  <div>
    <Card
      sx={{
        minWidth: "200px",
      }}
      onClick={
        (() => console.log(title),
        () =>
          displaySharedNote(
            id,
            styles.cardGradient,
            styles.activeCardGradient,
            styles.focusShadow
          ))
      }
      className="sharedNote"
      style={styles.sharedNoteCard}
    >
      <CardContent>
        <Typography style={styles.noteTitle}>{title}</Typography>
        <Typography
          sx={{ display: "inline-block" }}
          component="span"
          style={styles.noteInListShared}
          className="shortDescription"
        >
          {shortenDescription(text)}
        </Typography>
        <Typography variant="body2">{date}</Typography>
      </CardContent>
    </Card>
  </div>
)

NoteShared.propTypes = {
  note: PropTypes.object,
  displaySharedNote: PropTypes.func,
}

export default NoteShared
