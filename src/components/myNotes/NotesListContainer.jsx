import { useState } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import deleteNote from "api/deleteNote";

import Notes from "./NotesList";
import ShareNoteContainer from "./actions/ShareNoteContainer";

const NotesListContainer = ({ user, displayChosenNote, notesToDisplay, setNotes, setPage, page }) => {
  const [openShare, shareNoteOpen] = useState(false);
  const [noteToShare, setNoteToShare] = useState(INIT.ACTIVE);

  const shareNote = (note) => {
    shareNoteOpen(true);
    setNoteToShare(note);
  };

  const removeNote = (noteId) => {
    deleteNote(noteId, user, setNotes, setPage);
  };
  return (
    <>
      <Notes
        displayChosenNote={displayChosenNote}
        notesToDisplay={notesToDisplay}
        setPage={setPage}
        page={page}
        shareNote={shareNote}
        removeNote={removeNote}
      />
      <ShareNoteContainer
        user={user}
        openShare={openShare}
        noteToShare={noteToShare}
        setNoteToShare={setNoteToShare}
        shareNoteOpen={shareNoteOpen}
      />
    </>
  );
};
NotesListContainer.propTypes = {
  user: PropTypes.string,
  notesToDisplay: PropTypes.arrayOf(PropTypes.object),
  displayChosenNote: PropTypes.func,
  setPage: PropTypes.func,
  page: PropTypes.number,
  setNotes: PropTypes.func,
};
export default NotesListContainer;
