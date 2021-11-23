import { useState, Suspense } from "react";
import { Box } from "@mui/system";
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

const MyNotesContainer = ({ user, store }) => {
  const [page, setPage] = useState(INIT.PAGE);
  const [notes, setNotes] = useGetNotes(user, page);
  const [active, setActive] = useState(INIT.ACTIVE);
  const [filtersByDate, applyDatesFilter] = useState([]);
  const [filtersByTitle, applyTitlesFilter] = useState([]);
  const dates = notes.map((note) => toLocalDate(note.createdAt));
  const titles = notes.map((note) => note.title);
  const uniqueDates = dates.filter((item, position) => dates.indexOf(item) === position);
  const uniqueTitles = titles.filter((item, position) => titles.indexOf(item) === position);
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
                <CircularProgress value={75} />
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
    </div>
  );
};
MyNotesContainer.propTypes = {
  user: PropTypes.string,
  store: PropTypes.object.isRequired,
};
export default MyNotesContainer;
