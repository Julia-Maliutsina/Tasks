import React from "react"
import "./App.css"
import Box from "@mui/material/Box"
import Notes from "../components/NotesList"
import styles from "./styled.js";
import notes from "../config/constants/notes.jsx"
import notesInitial from "../config/constants/notesInitial.jsx"
import { useState } from 'react';

function AllNotes() {

  const [notes, setActiveNote] = useState(notesInitial);

  function showChosenNote (id, text, active) {
    const activeNote = document.getElementsByClassName("chosenNote")[0];
    const noteText = text;
    activeNote.innerHTML= noteText;
    const allNotes = document.getElementsByTagName('li');
    for (let n=0; n<allNotes.length; n++) {
      allNotes[n].style.background="inherit";
    }
    const noteInList = allNotes[id];
    noteInList.style.background= "#ccaabe"; 

    setActiveNote(()=>{
    for(let a=0; a<notes.length; a++) {
      notes[a].active=false;
    }
    notes[id].active=true; 
    return notes;})
  }
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
      }}
    >
      <Notes notes={notes} noteChosen={showChosenNote}/>
      <div class="chosenNote" style={styles.ActiveNote}>Select note to display</div>
    </Box>
  )
}

export default AllNotes
