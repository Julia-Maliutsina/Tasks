import { ButtonGroup, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import styles from "pages/styled";

import NewNoteForm from "./NewNoteForm";
import FiltersContainer from "./FiltersContainer";

const ButtonsNotes = ({
  uniqueDates,
  uniqueTitles,
  applyDatesFilter,
  applyTitlesFilter,
  addNoteOpen,
  newNoteOpen,
  addNoteClose,
  setNewNoteTitle,
  setNewNoteText,
  addNoteSubmit,
  filterNotesByTitle,
  filterNotesByDate,
  discardFilters,
  filterDateOpen,
  filterTitleOpen,
  setFilterDateOpen,
  setFilterTitleOpen,
  filterDatesArray,
  filterTitlesArray,
  setDateFilters,
  setTitleFilters,
}) => (
  <div className="buttonsNotes">
    <h4>Filter by: </h4>
    <ButtonGroup variant="contained" style={styles.buttonGroup}>
      <Button id="filterButton" onClick={filterNotesByTitle}>
        Title
      </Button>
      <Button id="filterButton" onClick={filterNotesByDate}>
        Date
      </Button>
      <Button id="filterButton" onClick={discardFilters}>
        Show all
      </Button>
    </ButtonGroup>
    <h4 style={styles.addNote}>Add note:</h4>
    <IconButton style={styles.addButtonIcon} onClick={addNoteOpen}>
      <AddCircleIcon color="info" fontSize="large" />
    </IconButton>
    <NewNoteForm
      addNoteClose={addNoteClose}
      newNoteOpen={newNoteOpen}
      setNewNoteTitle={setNewNoteTitle}
      setNewNoteText={setNewNoteText}
      addNoteSubmit={addNoteSubmit}
    />
    <FiltersContainer
      uniqueDates={uniqueDates}
      uniqueTitles={uniqueTitles}
      applyDatesFilter={applyDatesFilter}
      applyTitlesFilter={applyTitlesFilter}
      filterDateOpen={filterDateOpen}
      filterTitleOpen={filterTitleOpen}
      setFilterDateOpen={setFilterDateOpen}
      setFilterTitleOpen={setFilterTitleOpen}
      filterDatesArray={filterDatesArray}
      filterTitlesArray={filterTitlesArray}
      setDateFilters={setDateFilters}
      setTitleFilters={setTitleFilters}
    />
  </div>
);

export default ButtonsNotes;
