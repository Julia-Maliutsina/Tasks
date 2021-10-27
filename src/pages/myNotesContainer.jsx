import React from "react"
import "./App.css"
import Box from "@mui/material/Box"
import Notes from "../components/NotesList"
import Save from "../components/SaveButton"
import styles from "./styled.js"
import PropTypes from "prop-types"

const MyNotes = ({showChosenNote, saveChangedNote, notes, active}) => {
  
  return(
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
          <h3 class="Title"> 
            {active.title} 
          </h3>
          <p>
          <textarea class="Text">
          </textarea>
          </p>
          <p class="Date">
            {active.date}
          </p>
        </div>
        <Save changeActiveNote={saveChangedNote}/>
      </div>
    </Box>
  </div>
)}

MyNotes.propTypes = {
  showChosenNote: PropTypes.func,
  saveChangedNote: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
}

export default MyNotes