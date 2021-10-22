import "./App.css"
import styles from "./styled.js"
import React from "react"
import MyNotes from "./myNotesContainer"
import SharedNotes from "./sharedNotes"
import { useState, useEffect } from "react"
import NOTES from "../config/constants/notes"
import shortenDescr from "../utils/noteShortDescr"
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom"

const App = () => {
  let chosenNote=(-1);
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
    try{
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
    catch (err) {
      alert('Select a note to save!')
    }
  }

  return (
    <div style={styles.Wrapper}>
          <BrowserRouter basename="/Tasks">
          <header style={styles.Header}>
        <span>My Notes</span>
            <div style={styles.Menu}>
                  <NavLink to="/"></NavLink>
                  <NavLink to="/notes" activeClassName="activeMenu">My Notes</NavLink>
                  <NavLink to="/shared-notes" activeClassName="activeMenu">Shared Notes</NavLink> 
            </div>  
            </header>        
            <Switch>
              <Route path="/shared-notes">
                <SharedNotes notes={notes}/>
              </Route>
              <Route path="/notes">
                <MyNotes notes={notes} showChosenNote={showChosenNote} saveChangedNote={saveChangedNote}/>
              </Route>
            </Switch>
          </BrowserRouter>

    </div>  
  )
}

export default App
