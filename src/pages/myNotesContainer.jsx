import { useState, Suspense } from "react";
import { Box } from "@mui/system";
import { Snackbar, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import useGetNotes from "api/loadPage.js";
import styles from "pages/styled";
import MyActiveNoteContainer from "components/myNotes/MyActiveNoteContainer";
import ButtonsNotesContainer from "components/myNotes/actions/ButtonsNotesContainer";
import applyNotesFilters from "utils/applyFilters";
import toLocalDate from "utils/toLocalDate";
import { NotesListContainer } from "index.jsx";

const HIDE_ALERT = 3000;
const PROGRESS_VALUE = 75;

const MyNotesContainer = ({ user, store }) => {
  const [authorizeAlertOpen, setAuthorizeAlertOpen] = useState(false);
  const [page, setPage] = useState(INIT.PAGE);
  const [notes, setNotes] = useGetNotes(user, page, setAuthorizeAlertOpen);
  const [active, setActive] = useState(INIT.ACTIVE);
  const [filtersByDate, applyDatesFilter] = useState([]);
  const [filtersByTitle, applyTitlesFilter] = useState([]);
  const handleAuthorizeAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAuthorizeAlertOpen(false);
  };
  const dates = notes.map((note) => toLocalDate(note.createdAt));
  const titles = notes.map((note) => note.title);
  const uniqueDates = dates.filter((date, position) => dates.indexOf(date) === position);
  const uniqueTitles = titles.filter((title, position) => titles.indexOf(title) === position);
  function showChosenNote(note) {
    setActive(note);
  }
  const notesToDisplay = applyNotesFilters(filtersByDate, filtersByTitle, notes);
  return (
    <div style={styles.maxWidth}>
      <Box sx={styles.myNotesGrid}>
        <div>
          <ButtonsNotesContainer
            user={user}
            uniqueDates={uniqueDates}
            uniqueTitles={uniqueTitles}
            applyDatesFilter={applyDatesFilter}
            applyTitlesFilter={applyTitlesFilter}
            setActive={setActive}
            setNotes={setNotes}
            setPage={setPage}
          />
          <Suspense
            fallback={
              <div style={styles.loading}>
                <CircularProgress value={PROGRESS_VALUE} />
              </div>
            }
          >
            <NotesListContainer
              user={user}
              displayChosenNote={showChosenNote}
              notesToDisplay={notesToDisplay}
              setNotes={setNotes}
              setPage={setPage}
              page={page}
            />
          </Suspense>
        </div>
        <MyActiveNoteContainer active={active} notes={notes} user={user} store={store} />
      </Box>
      <Snackbar open={authorizeAlertOpen} autoHideDuration={HIDE_ALERT} onClose={handleAuthorizeAlertClose}>
        <Alert onClose={handleAuthorizeAlertClose} severity="error" sx={styles.maxWidth}>
          Session has ended. Please, sign in.
        </Alert>
      </Snackbar>
    </div>
  );
};
MyNotesContainer.propTypes = {
  user: PropTypes.string,
  store: PropTypes.object.isRequired,
};
export default MyNotesContainer;
