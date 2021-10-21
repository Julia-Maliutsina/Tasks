import "./App.css"
import styles from "./styled.js";
import React from "react"
import AllNotes from "./myNotesContainer"
import { useState, useEffect } from "react";
import NOTES from "../config/constants/notes"
import shortenDescr from "../utils/noteShortDescr"

const App = () => {
  let chosenNote=0;
  const [notes, saveNote] = useState(NOTES);

  useEffect(() => {
    saveNote(JSON.parse(window.localStorage.getItem('notes')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

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
  }

  function saveChangedNote() {
    const activeNote = document.getElementsByClassName("chosenNote")[0];
    const newText = activeNote.value;
    let item = document.getElementsByClassName('shortDescr')[chosenNote];   
    let savedNotes = notes.map(function(note){
      if (note.id === chosenNote) {
        note.text=newText;
      }
      return note;
    })   
    saveNote(savedNotes);
    item.innerHTML = shortenDescr(notes[chosenNote].text);
  }
  return (
  <div style={styles.Wrapper}>
    <header style={styles.Header}>
      My Notes
    </header>
    <div style={{ width: "100%" }}>
      <AllNotes showChosenNote={showChosenNote} saveChangedNote={saveChangedNote} notes={notes}/>
    </div>
  </div>
  )
}

export default App
