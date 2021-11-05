import React from "react";
import { useState, useEffect } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import InfoIcon from "@mui/icons-material/Info";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import upgradeNotes from "../api/notesUpdate";

import PATHS from "../../src/config/routes/routes";
import MESSAGES from "../../src/config/constants/messages";

import MyNotesContainer from "./myNotesContainer";
import SharedNotes from "./sharedNotes";
import AboutApp from "./about";
import SignUpForm from "./signUp";
import SignInForm from "./signIn";
import Profile from "./profile";
import NotFound from "../components/NotFound";
import "./App.css";
import styles from "./styled.js";

const queryClient = new QueryClient();

const MyNotes = ({
  NOTES,
  SHARED,
  profileInfo,
  isAuthorized,
  userId,
  submitRegistration,
  submitAutorization,
  signOut,
}) => {
  const [myNotes, saveNote] = useState(NOTES);

  useEffect(() => {
    if (localStorage.myNotes) {
      saveNote(JSON.parse(localStorage.getItem("myNotes")));
    } else {
      saveNote(NOTES);
    }
  }, [NOTES]);

  if (localStorage.isAuthorized) {
    isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"));
  }

  const [sharedChosenNote, displaySharedNote] = useState({
    title: MESSAGES.NOTES_INIT,
  });

  const [myChosenNote, displayMyNote] = useState({
    title: MESSAGES.NOTES_INIT,
    text: "",
  });
  const [activeId, changeActive] = useState([-1]);

  const [isNoteChosen, chooseNote] = useState(true);

  function showChosenNote(id) {
    changeActive(id);
    displayMyNote(myNotes[id]);
  }

  function showChosenSharedNote(id) {
    displaySharedNote(SHARED[id]);
  }

  function saveChangedNote(newText) {
    if (activeId < 0) {
      chooseNote(false);
    } else {
      chooseNote(true);
      let savedNotes = () => {
        myNotes[activeId].text = newText;
        upgradeNotes(myNotes, userId);
        return myNotes;
      };
      saveNote(savedNotes);
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
            {!isAuthorized ? (
              <div style={{ display: "inline" }}>
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
            ) : (
              <div style={{ display: "inline" }}>
                <NavLink
                  to={PATHS.profile}
                  className="menuSignIn"
                  activeClassName="activeMenuAuthorization"
                >
                  <AccountCircleIcon style={styles.menuIconProfile} />
                  <span>Profile</span>
                </NavLink>
              </div>
            )}
          </div>
        </header>
        <Switch>
          <Route exact path="/"></Route>
          <Route path={PATHS.sharedNotes}>
            {isAuthorized ? (
              <QueryClientProvider client={queryClient}>
                <SharedNotes
                  active={sharedChosenNote}
                  sharedNoteChosen={showChosenSharedNote}
                  userId={userId}
                />
              </QueryClientProvider>
            ) : (
              <Redirect to={PATHS.notFound} />
            )}
          </Route>
          <Route path={PATHS.myNotes}>
            {isAuthorized ? (
              <QueryClientProvider client={queryClient}>
                <MyNotesContainer
                  notes={myNotes}
                  active={myChosenNote}
                  showChosenNote={showChosenNote}
                  saveChangedNote={saveChangedNote}
                  isNoteChosen={isNoteChosen}
                  userId={userId}
                />
              </QueryClientProvider>
            ) : (
              <Redirect to={PATHS.notFound} />
            )}
          </Route>
          <Route path={PATHS.aboutApp}>
            <AboutApp />
          </Route>
          <Route path={PATHS.signUp}>
            {!isAuthorized ? (
              <SignUpForm
                isAuthorized={isAuthorized}
                submitRegistration={submitRegistration}
              />
            ) : (
              <Redirect to={PATHS.profile} />
            )}
          </Route>
          <Route path={PATHS.signIn}>
            {!isAuthorized ? (
              <SignInForm
                isAuthorized={isAuthorized}
                submitAutorization={submitAutorization}
              />
            ) : (
              <Redirect to={PATHS.profile} />
            )}
          </Route>
          <Route path={PATHS.profile}>
            {isAuthorized ? (
              <Profile profileInfo={profileInfo} signOut={signOut} />
            ) : (
              <Redirect to={PATHS.signIn} />
            )}
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
  );
};

export default MyNotes;
