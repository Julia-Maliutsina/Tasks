import { ButtonGroup, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropTypes from "prop-types";

import styles from "pages/styled";

import NewNoteForm from "./NewNoteForm";
import FiltersContainer from "./filters/FiltersContainer";

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
  newNoteError,
  alertNewOpen,
  handleAlertNewClose,
}) => (
  <div className="buttonsNotes">
    <h4>Filter by: </h4>
    <ButtonGroup variant="contained" style={styles.buttonGroup}>
      <Button id="filterButton" onClick={filterNotesByTitle} data-testid="filterByTitles">
        Title
      </Button>
      <Button id="filterButton" onClick={filterNotesByDate} data-testid="filterByDates">
        Date
      </Button>
      <Button id="filterButton" onClick={discardFilters} data-testid="discardFilters">
        Show all
      </Button>
    </ButtonGroup>
    <h4 style={styles.addNote}>Add note:</h4>
    <IconButton style={styles.addButtonIcon} onClick={addNoteOpen} data-testid="addNote">
      <AddCircleIcon color="info" fontSize="large" />
    </IconButton>
    <NewNoteForm
      addNoteClose={addNoteClose}
      newNoteOpen={newNoteOpen}
      setNewNoteTitle={setNewNoteTitle}
      setNewNoteText={setNewNoteText}
      addNoteSubmit={addNoteSubmit}
      newNoteError={newNoteError}
      alertNewOpen={alertNewOpen}
      handleAlertNewClose={handleAlertNewClose}
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
ButtonsNotes.propTypes = {
  uniqueDates: PropTypes.array,
  uniqueTitles: PropTypes.array,
  applyDatesFilter: PropTypes.func,
  applyTitlesFilter: PropTypes.func,
  addNoteOpen: PropTypes.func,
  newNoteOpen: PropTypes.bool,
  addNoteClose: PropTypes.func,
  setNewNoteTitle: PropTypes.func,
  setNewNoteText: PropTypes.func,
  addNoteSubmit: PropTypes.func,
  filterNotesByTitle: PropTypes.func,
  filterNotesByDate: PropTypes.func,
  discardFilters: PropTypes.func,
  filterDateOpen: PropTypes.bool,
  filterTitleOpen: PropTypes.bool,
  setFilterDateOpen: PropTypes.func,
  setFilterTitleOpen: PropTypes.func,
  filterDatesArray: PropTypes.array,
  filterTitlesArray: PropTypes.array,
  setDateFilters: PropTypes.func,
  setTitleFilters: PropTypes.func,
  newNoteError: PropTypes.string,
  alertNewOpen: PropTypes.bool,
  handleAlertNewClose: PropTypes.func,
};
export default ButtonsNotes;
