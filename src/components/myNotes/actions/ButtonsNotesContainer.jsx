import { useState } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import createNewNote from "api/newNote";

import ButtonsNotes from "./ButtonsNotes";

const ButtonsNotesContainer = ({
  user,
  uniqueDates,
  uniqueTitles,
  applyDatesFilter,
  applyTitlesFilter,
  setActive,
  setNotes,
  setPage,
}) => {
  const [newNoteOpen, setOpen] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteText, setNewNoteText] = useState("");
  const addNoteOpen = () => {
    setNewNoteTitle("");
    setNewNoteText("");
    setOpen(true);
    setActive(INIT.ACTIVE);
  };
  const addNoteClose = () => {
    setOpen(false);
  };
  const addNoteSubmit = () => {
    if (newNoteTitle.length > 3 || newNoteText.length > 3) {
      createNewNote(newNoteTitle, newNoteText, user, setNotes, setPage);
      addNoteClose();
    }
  };
  const [filterDateOpen, setFilterDateOpen] = useState(false);
  const [filterDatesArray, setDateFilters] = useState([]);
  const [filterTitleOpen, setFilterTitleOpen] = useState(false);
  const [filterTitlesArray, setTitleFilters] = useState([]);
  const filterNotesByDate = () => {
    setFilterDateOpen(true);
    setDateFilters([]);
  };
  const filterNotesByTitle = () => {
    setFilterTitleOpen(true);
    setTitleFilters([]);
  };
  const discardFilters = () => {
    setDateFilters([]);
    applyDatesFilter([]);
    setTitleFilters([]);
    applyTitlesFilter([]);
  };
  return (
    <ButtonsNotes
      uniqueDates={uniqueDates}
      uniqueTitles={uniqueTitles}
      applyDatesFilter={applyDatesFilter}
      applyTitlesFilter={applyTitlesFilter}
      addNoteOpen={addNoteOpen}
      newNoteOpen={newNoteOpen}
      addNoteClose={addNoteClose}
      setNewNoteTitle={setNewNoteTitle}
      setNewNoteText={setNewNoteText}
      addNoteSubmit={addNoteSubmit}
      filterNotesByTitle={filterNotesByTitle}
      filterNotesByDate={filterNotesByDate}
      discardFilters={discardFilters}
      filterDateOpen={filterDateOpen}
      filterTitleOpen={filterTitleOpen}
      setFilterDateOpen={setFilterDateOpen}
      setFilterTitleOpen={setFilterTitleOpen}
      filterDatesArray={filterDatesArray}
      filterTitlesArray={filterTitlesArray}
      setDateFilters={setDateFilters}
      setTitleFilters={setTitleFilters}
    />
  );
};
ButtonsNotesContainer.propTypes = {
  user: PropTypes.string,
  uniqueDates: PropTypes.array,
  uniqueTitles: PropTypes.array,
  applyDatesFilter: PropTypes.func,
  applyTitlesFilter: PropTypes.func,
  setActive: PropTypes.func,
  setNotes: PropTypes.func,
  setPage: PropTypes.func,
};
export default ButtonsNotesContainer;
