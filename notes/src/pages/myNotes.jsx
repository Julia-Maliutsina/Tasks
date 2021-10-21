import "./App.css"
import styles from "./styled.js";
import React from "react"
import AllNotes from "./myNotesContainer"
import { useState, useEffect } from "react";
import NOTES from "../config/constants/notes"
import shortenDescr from "../utils/noteShortDescr"

const App = () => {
  let chosenNote=0;
  const [notes, setActiveNote] = useState(NOTES);
  const [newNotes, saveNote] = useState(notes);

  useEffect(() => {
      console.log('is called')
  }, [notes])

  function showChosenNote (id, text) {
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
    setActiveNote(()=>{
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
    saveNote(()=>{
      newNotes[chosenNote].text=newText;
      return newNotes;
    })
    item.innerHTML = shortenDescr(notes[chosenNote].text);
  }
  return (
  <div style={styles.Wrapper}>
    <header style={styles.Header}>
      My Notes
    </header>
    <div style={{ width: "100%" }}>
      <AllNotes showChosenNote={showChosenNote} saveChangedNote={saveChangedNote} notes={NOTES}/>
    </div>
  </div>
  )
}

export default App
