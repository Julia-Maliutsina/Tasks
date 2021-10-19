import React from "react"
import "./App.css"
import Box from "@mui/material/Box"
import Notes from "../components/renderNotesList"
import styles from "./styled.js";
import notes from "../config/constants/notes.jsx"
import notesInitial from "../config/constants/notesInitial.jsx"
import { useState } from 'react';



function AllNotes() {

  const [notes, setNotes] = React.useState(notesInitial);

  function showChosenNote (id, text, active) {
    setNotes(()=> {
      for (let i=0; i<notes.length; i++) {
        notes[i].active="false";
      }
      notes[id].active="true"; 
      const activeNote = document.getElementsByClassName("chosenNote")[0];
      const noteText = text;
      activeNote.innerHTML= noteText;
      const allNotes = document.getElementsByTagName('li');
      for (let n=0; n<allNotes.length; n++) {
          allNotes[n].style.background="inherit";
      }
      const noteInList = allNotes[id];
      noteInList.style.background= "#ccaabe";
        console.log('j')
    })
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
      }}
    >
      <Notes notes={notes} chooseNote={showChosenNote}/>
      <div class="chosenNote" style={styles.ActiveNote}>Select note to display</div>
    </Box>
  )
}

export default AllNotes
