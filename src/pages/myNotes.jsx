import React from "react"
import { useState, useEffect } from "react"
import StickyNote2Icon from "@mui/icons-material/StickyNote2"
import InfoIcon from "@mui/icons-material/Info"
import OfflineShareIcon from "@mui/icons-material/OfflineShare"
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom"
import axios from "axios"
import { createStore } from "redux"

import PATHS from "../../src/config/routes/routes"

import MyNotesContainer from "./myNotesContainer"
import SharedNotes from "./sharedNotes"
import AboutApp from "./about"
import SignUpForm from "./signUp"
import SignInForm from "./signIn"
import NotFound from "../components/NotFound"
import "./App.css"
import styles from "./styled.js"

const MyNotes = ({ NOTES, SHARED, isAuthorized, submitAutorization }) => {
  const [myNotes, saveNote] = useState(NOTES)

  useEffect(() => {
    if (localStorage.myNotes) {
      saveNote(JSON.parse(localStorage.getItem("myNotes")))
    } else {
      console.log(NOTES)
      saveNote(NOTES)
    }
  }, [NOTES])

  if (localStorage.sharedNotes) {
    SHARED = JSON.parse(localStorage.getItem("sharedNotes"))
    console.log("called")
  }

  const [sharedChosenNote, displaySharedNote] = useState({
    title: "Select note to display",
  })

  const [myChosenNote, displayMyNote] = useState({
    title: "Select note to display",
  })
  const [num, changeActive] = useState([-1])

  let chosenNote = { num }

  function showChosenNote(id, activeColor, shadow) {
    const allNotes = document.getElementsByTagName("li")
    for (let n = 0; n < allNotes.length; n++) {
      allNotes[n].style.background = "inherit"
    }
    const noteInList = allNotes[id]
    noteInList.style.background = activeColor
    document.getElementsByClassName("chosenNote")[0].style.boxShadow = shadow
    changeActive(id)
    document.getElementsByTagName("textarea")[0].value = myNotes[id].text
    displayMyNote(myNotes[id])
  }

  function showChosenSharedNote(id, basicColor, activeColor, shadow) {
    document.getElementsByClassName("chosenSharedNote")[0].style.boxShadow =
      shadow
    const shareNotes = document.getElementsByClassName("sharedNote")
    for (let n = 0; n < shareNotes.length; n++) {
      shareNotes[n].style.background = basicColor
    }
    shareNotes[id].style.background = activeColor
    displaySharedNote(SHARED[id])
  }

  function saveChangedNote() {
    if (chosenNote.num < 0) {
      alert("Select a note to save!")
    } else {
      const newText = document.getElementsByTagName("textarea")[0].value
      let savedNotes = () => {
        if (chosenNote.num >= 0) {
          myNotes[chosenNote.num].text = newText
        }
        localStorage.setItem("myNotes", JSON.stringify(myNotes))
        return myNotes
      }
      saveNote(savedNotes)
    }
  }

  return (
    <div style={styles.wrapper}>
      <BrowserRouter basename={PATHS.base}>
        <header style={styles.header}>
          <span>My Notes</span>
          <div style={styles.menu}>
            <NavLink
              to={PATHS.myNotes}
              style={styles.menuMain}
              activeClassName="activeMenu"
            >
              <StickyNote2Icon style={styles.menuIcon} />
              <span style={styles.menuText}>My Notes</span>
            </NavLink>
            <NavLink
              to={PATHS.sharedNotes}
              style={styles.menuMain}
              activeClassName="activeMenu"
            >
              <OfflineShareIcon style={styles.menuIcon} />
              <span style={styles.menuText}>Shared Notes</span>
            </NavLink>
            <NavLink
              to={PATHS.aboutApp}
              style={styles.menuMain}
              activeClassName="activeMenu"
            >
              <InfoIcon style={styles.menuIcon} />
              <span style={styles.menuText}>About</span>
            </NavLink>
            <NavLink
              to={PATHS.signIn}
              className="menuSignIn"
              activeClassName="activeMenuAuthorization"
            >
              <span>Sign in</span>
            </NavLink>
            <NavLink
              to={PATHS.signUp}
              style={styles.menuSignUp}
              activeClassName="activeMenuRegistration"
            >
              <span>Sign up</span>
            </NavLink>
          </div>
        </header>
        <Switch>
          <Route exact path="/"></Route>
          <Route path={PATHS.sharedNotes}>
            <SharedNotes
              notes={SHARED}
              active={sharedChosenNote}
              sharedNoteChosen={showChosenSharedNote}
            />
          </Route>
          <Route path={PATHS.myNotes}>
            <MyNotesContainer
              notes={myNotes}
              active={myChosenNote}
              showChosenNote={showChosenNote}
              saveChangedNote={saveChangedNote}
            />
          </Route>
          <Route path={PATHS.aboutApp}>
            <AboutApp />
          </Route>
          <Route path={PATHS.signUp}>
            <SignUpForm />
          </Route>
          <Route path={PATHS.signIn}>
            <SignInForm submitAutorization={submitAutorization} />
          </Route>
          <Route path={PATHS.notFound}>
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to={PATHS.notFound} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default MyNotes
