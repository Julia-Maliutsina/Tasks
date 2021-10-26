import "./App.css"
import styles from "./styled.js"
import React from "react"
import MyNotes from "./myNotesContainer"
import SharedNotes from "./sharedNotes"
import AboutApp from "./about"
import { useState, useEffect } from "react"
import NOTES from "../config/constants/notes"
import shortenDescr from "../utils/noteShortDescr"
import Typography from "@mui/material/Typography"
import NotFound from "../components/NotFound"
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import InfoIcon from '@mui/icons-material/Info'
import OfflineShareIcon from '@mui/icons-material/OfflineShare'
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom"

const App = ( ) => {
  let chosenNote=(-1);

  const [notes, saveNote] = useState(NOTES);

  useEffect(() => {
    if (localStorage.notes) {
      saveNote(JSON.parse(localStorage.getItem('notes')))
    }
    else {
      saveNote(NOTES)
    }
  },[])

  function showChosenNote (id, text) {
    const activeNote = document.getElementsByClassName("chosenNote")[0];
    const noteText = text;
    activeNote.value= noteText;
    const allNotes = document.getElementsByTagName('li');
    for (let n=0; n<allNotes.length; n++) {
      allNotes[n].style.background="inherit";
    }
    const noteInList = allNotes[id];
    noteInList.style.background= "linear-gradient(35deg, #D99ABF, #cf93b6)"; 
    chosenNote = id;
  }

  function showChosenSharedNote (id, text) {
    const activeSharedNote = document.getElementsByClassName("chosenSharedNote")[0];
    const sharedNoteText = text;
    activeSharedNote.innerHTML = sharedNoteText;
    const shareNotes = document.getElementsByClassName("sharedNote");
    for (let n=0; n<shareNotes.length; n++) {
      shareNotes[n].style.background="linear-gradient(135deg, #fbf6fc, #e7d8e7)";
    }
    shareNotes[id].style.background="linear-gradient(45deg, #dbc4db, #cf93b6)";
  }

  function saveChangedNote() {
    try{
      const activeNote = document.getElementsByClassName("chosenNote")[0];
      const newText = activeNote.value;
      let item = document.getElementsByClassName('shortDescr')[chosenNote];   
      let savedNotes = (()=>{
        if (chosenNote>=0) {
          notes[chosenNote].text=newText;
        }
        localStorage.setItem('notes', JSON.stringify(notes));
        return notes;
      });   
      saveNote(savedNotes);
      item.innerHTML = shortenDescr(newText);
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
              <NavLink to="/notes" activeClassName="activeMenu"><StickyNote2Icon style={styles.MenuIcon}/><span style={styles.MenuText}>My Notes</span></NavLink>
              <NavLink to="/shared-notes" activeClassName="activeMenu"><OfflineShareIcon style={styles.MenuIcon}/><span style={styles.MenuText}>Shared Notes</span></NavLink> 
              <NavLink to="/about" activeClassName="activeMenu"><InfoIcon style={styles.MenuIcon}/><span style={styles.MenuText}>About</span></NavLink>
            </div>  
        </header>        
        <Switch>
        <Route exact path="/">
            <div></div>
          </Route>
          <Route path="/shared-notes">
            <SharedNotes notes={notes} sharedNoteChosen={showChosenSharedNote}/>
          </Route>
          <Route path="/notes">
            <MyNotes notes={notes} showChosenNote={showChosenNote} saveChangedNote={saveChangedNote}/>
          </Route>
          <Route path="/about">
            <AboutApp />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>  
  )
}

export default App
