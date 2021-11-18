import { useState } from "react";

import INIT from "config/constants/initial";
import deleteNote from "api/deleteNote";

import Notes from "./NotesList";
import ShareNoteContainer from "./actions/ShareNoteContainer";

const NotesListContainer = ({ user, displayChosenNote, notesToDisplay, setNotes, setPage, page, changePosition }) => {
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
    <div>
      <Notes
        displayChosenNote={displayChosenNote}
        notesToDisplay={notesToDisplay}
        setPage={setPage}
        page={page}
        changePosition={changePosition}
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
    </div>
  );
};

export default NotesListContainer;
