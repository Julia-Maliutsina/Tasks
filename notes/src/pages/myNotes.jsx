import React from "react"
import "./App.css"
import Box from "@mui/material/Box"
import Notes from "../components/NotesList"
import Save from "../components/SaveButton"
import styles from "./styled.js"
import notesInitial from "../config/constants/notesInitial.jsx"
import { useState } from 'react'

function AllNotes() {

  let chosenNote=0;
  const [notes, setActiveNote] = useState(notesInitial);
  const [newNote, saveNote] = useState(notes[chosenNote]);
 
  function showChosenNote (id, text, active) {
    const activeNote = document.getElementsByClassName("chosenNote")[0];
    const noteText = text;
    activeNote.value= noteText;
    const allNotes = document.getElementsByTagName('li');
    for (let n=0; n<allNotes.length; n++) {
      allNotes[n].style.background="inherit";
    }
    const noteInList = allNotes[id];
    noteInList.style.background= "#cf93b6"; 

    chosenNote = id;

    setActiveNote((notes)=>{
      for(let a=0; a<notes.length; a++) {
        notes[a].active=false;
      }
      notes[id].active=true;
      return notes;
    })

  }

  function saveChangedNote() {
  
    const activeNote = document.getElementsByClassName("chosenNote")[0];
    const newText = activeNote.value;
    let item = document.getElementsByClassName('shortDescr')[chosenNote];
    item.innerHTML = newText.slice(0,20) + "...";
      
    saveNote(()=>{
      notes[chosenNote].text=newText;
      return newNote;
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
        <Notes notes={notes} noteChosen={showChosenNote}/>
        <div>
        <textarea class="chosenNote" style={styles.ActiveNote} placeholder="Select note to display"/>
        <Save changeActiveNote={saveChangedNote}/>
        </div>
      </Box>
    )


}

export default AllNotes
