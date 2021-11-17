import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import PATHS from "../../src/config/routes/routes";
import "../../src/pages/App.css";
import styles from "../../src/pages/styled.js";

import MyNotesContainer from "./myNotesContainer";
import SharedNotes from "./sharedNotes";
import AboutApp from "./about";
import SignUpForm from "./signUp";
import SignInForm from "./signIn";
import Profile from "./profile";
import WelcomePage from "./main";
import NotFound from "../components/NotFound";


const queryClient = new QueryClient();

const MyNotes = ({
  profileInfo,
  isAuthorized,
  user,
  submitRegistration,
  submitAutorization,
  signOut,
  store,
}) => {
  if (localStorage.isAuthorized) {
    isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"));
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
              <span style={styles.menuText}>My Notes</span>
            </NavLink>
            <NavLink
              to={PATHS.sharedNotes}
              style={styles.menuMain}
              activeClassName="activeMenu"
            >
              <span style={styles.menuText}>Shared Notes</span>
            </NavLink>
            <NavLink
              to={PATHS.aboutApp}
              style={styles.menuMain}
              activeClassName="activeMenu"
            >
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
              <div style={styles.inline}>
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
          <Route exact path={PATHS.initial}>
            <WelcomePage isAuthorized={isAuthorized} name={profileInfo.name} />
          </Route>
          <Route path={PATHS.sharedNotes}>
            {isAuthorized ? (
              <QueryClientProvider client={queryClient}>
                <SharedNotes userId={1} />
              </QueryClientProvider>
            ) : (
              <Redirect to={PATHS.notFound} />
            )}
          </Route>
          <Route path={PATHS.myNotes}>
            {isAuthorized ? (
              <QueryClientProvider client={queryClient}>
                <MyNotesContainer user={user} store={store} />
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
              <SignUpForm submitRegistration={submitRegistration} />
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
