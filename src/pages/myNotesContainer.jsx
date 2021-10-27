import React from "react"
import "./App.css"
import Box from "@mui/material/Box"
import Notes from "../components/NotesList"
import Save from "../components/SaveButton"
import styles from "./styled.js"
import PropTypes from "prop-types"

const MyNotes = ({showChosenNote, saveChangedNote, notes}) => (
  <div style={{ width: "100%" }}>
    <Box
      sx={{
      display: "grid",
      gridTemplateColumns: "36% 60%",
      gap: 1,
      }}
    >
      <Notes notes={notes} noteChosen={showChosenNote}/>
      <div>
        <div class="chosenNote" style={styles.ActiveNote}>
          Select note to display
        </div>
        <Save changeActiveNote={saveChangedNote}/>
      </div>
    </Box>
  </div>
)

MyNotes.propTypes = {
  showChosenNote: PropTypes.func,
  saveChangedNote: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
}

export default MyNotes