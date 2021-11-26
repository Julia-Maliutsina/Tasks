import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import PATHS from "config/routes";
import styles from "pages/styled.js";
import "pages/App.css";
import WelcomePage from "components/Main";
import NotFound from "components/NotFound";
import MainMenu from "components/MainMenu";

import MyNotesContainer from "./myNotesContainer";
import SharedNotesContainer from "./sharedNotesContainer";
import AboutApp from "./about";
import SignUpContainer from "./signUpContainer";
import SignInContainer from "./signInContainer";
import ProfileContainer from "./profileContainer";

const MyNotes = ({ profileInfo, isAuthorized, user, submitRegistration, submitAutorization, signOut, store }) => (
  <div style={styles.wrapper}>
    <BrowserRouter basename={PATHS.base}>
      <header style={styles.header}>
        <span>My Notes</span>
        <MainMenu isAuthorized={isAuthorized} />
      </header>
      <Switch>
        <Route exact path={PATHS.initial}>
          <WelcomePage isAuthorized={isAuthorized} name={profileInfo.name} />
        </Route>
        <Route path={PATHS.sharedNotes}>
          {isAuthorized ? <SharedNotesContainer user={user} store={store} /> : <Redirect to={PATHS.notFound} />}
        </Route>
        <Route path={PATHS.myNotes}>
          {isAuthorized ? <MyNotesContainer user={user} store={store} /> : <Redirect to={PATHS.notFound} />}
        </Route>
        <Route path={PATHS.aboutApp}>
          <AboutApp />
        </Route>
        <Route path={PATHS.signUp}>
          {!isAuthorized ? (
            <SignUpContainer submitRegistration={submitRegistration} />
          ) : (
            <Redirect to={PATHS.profile} />
          )}
        </Route>
        <Route path={PATHS.signIn}>
          {!isAuthorized ? (
            <SignInContainer isAuthorized={isAuthorized} submitAutorization={submitAutorization} />
          ) : (
            <Redirect to={PATHS.profile} />
          )}
        </Route>
        <Route path={PATHS.profile}>
          {isAuthorized ? (
            <ProfileContainer user={user} profileInfo={profileInfo} signOut={signOut} />
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
MyNotes.propTypes = {
  profileInfo: PropTypes.object,
  isAuthorized: PropTypes.bool,
  user: PropTypes.string,
  submitRegistration: PropTypes.func,
  submitAutorization: PropTypes.func,
  signOut: PropTypes.func,
  store: PropTypes.object.isRequired,
};
export default MyNotes;
