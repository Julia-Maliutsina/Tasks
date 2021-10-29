import React from "react"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"

import Notes from "../components/NotesList"
import Save from "../components/SaveButton"
import "./App.css"
import styles from "./styled.js"

const MyNotesContainer = ({
  showChosenNote,
  saveChangedNote,
  notes,
  active,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "36% 60%",
          gap: 1,
        }}
      >
        <Notes notes={notes} noteChosen={showChosenNote} />
        <div>
          <div class="chosenNote" style={styles.activeNote}>
            <h3 style={styles.title}>{active.title}</h3>
            <p>
              <textarea style={styles.text}></textarea>
            </p>
            <p style={styles.date}>{active.date}</p>
          </div>
          <Save title={"Save Changes"} buttonFunction={saveChangedNote} />
        </div>
      </Box>
    </div>
  )
}

MyNotesContainer.propTypes = {
  showChosenNote: PropTypes.func,
  saveChangedNote: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
}

export default MyNotesContainer
