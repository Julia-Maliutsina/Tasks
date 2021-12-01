import React from "react";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import useGetSharedNotes from "api/loadSharedPage";
import ActiveSharedNote from "components/shared/ActiveShared";
import SharedList from "components/shared/SharedList";
import styles from "pages/styled";

const HIDE_ALERT = 3000;

const SharedNotesContainer = ({ user, store, refresh }) => {
  const [authorizeAlertOpen, setAuthorizeAlertOpen] = useState(false);
  const [pageShared, setPageShared] = useState(INIT.PAGE);
  const [sharedNotes, setShared] = useGetSharedNotes(pageShared, user, setAuthorizeAlertOpen, refresh, store);
  const [sharedChosenNote, displaySharedNote] = useState(INIT.ACTIVE_SHARED);
  const handleAuthorizeAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAuthorizeAlertOpen(false);
  };
  return (
    <div style={styles.maxWidth}>
      <ActiveSharedNote sharedChosenNote={sharedChosenNote} />
      <SharedList
        sharedNotes={sharedNotes}
        displaySharedNote={displaySharedNote}
        pageShared={pageShared}
        setPageShared={setPageShared}
      />
      <Snackbar open={authorizeAlertOpen} autoHideDuration={HIDE_ALERT} onClose={handleAuthorizeAlertClose}>
        <Alert onClose={handleAuthorizeAlertClose} severity="error" sx={styles.maxWidth}>
          Session has ended. Please, sign in.
        </Alert>
      </Snackbar>
    </div>
  );
};
SharedNotesContainer.propTypes = {
  user: PropTypes.string,
};
export default SharedNotesContainer;
