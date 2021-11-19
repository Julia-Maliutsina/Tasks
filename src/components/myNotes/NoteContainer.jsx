import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";

import Note from "./Note";

const NoteContainer = ({ note, displayChosenNote, shareNote, removeNote }) => {
  const [noteToRemove, setNoteToRemove] = useState(INIT.ID);
  useEffect(() => {
    if (noteToRemove >= INIT.ID_MINIMAL) removeNote(noteToRemove);
  }, [noteToRemove]);
  return (
    <Note note={note} displayChosenNote={displayChosenNote} shareNote={shareNote} setNoteToRemove={setNoteToRemove} />
  );
};
NoteContainer.propTypes = {
  note: PropTypes.object,
  displayChosenNote: PropTypes.func,
  shareNote: PropTypes.func,
  removeNote: PropTypes.func,
};
export default NoteContainer;
