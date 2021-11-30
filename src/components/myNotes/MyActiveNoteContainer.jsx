import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import updateNotes from "api/notesUpdate";

import MyActiveNote from "./MyActiveNote";

const MyActiveNoteContainer = ({ active, notes, user, store, refresh }) => {
  const [newText, changeText] = useState(active.description);
  const [alertOpen, setAlertOpen] = useState(false);
  useEffect(() => {
    changeText(active.description);
  }, [active]);
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  function handleChange(textareaValue) {
    changeText(textareaValue);
  }
  function saveChangedNote(newText) {
    if (active.id.length >= INIT.ID) {
      for (let index = 0; index < notes.length; index++) {
        if (notes[index].id === active.id) {
          notes[index].description = newText;
          updateNotes(notes[index], active.id, user, store, refresh);
          break;
        }
      }
      store.dispatch({
        type: "loadPage",
      });
    } else {
      setAlertOpen(true);
    }
  }
  return (
    <MyActiveNote
      active={active}
      newText={newText}
      handleChange={handleChange}
      alertOpen={alertOpen}
      saveChangedNote={saveChangedNote}
      handleAlertClose={handleAlertClose}
    />
  );
};
MyActiveNoteContainer.propTypes = {
  active: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.string,
  store: PropTypes.object.isRequired,
};
export default MyActiveNoteContainer;
