import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  FormControl,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";

import styles from "pages/styled";

const FilterDatesForm = ({
  filterDateOpen,
  setFilterDateOpen,
  uniqueDates,
  changeDateFilters,
  applyDateFilters,
  changeFilterDateOpen,
}) => (
  <Dialog open={filterDateOpen} onClose={changeFilterDateOpen}>
    <DialogTitle style={styles.newNote}>Filter by dates</DialogTitle>
    <DialogContent>
      <DialogContentText style={styles.addNoteMessage}>Choose dates to display</DialogContentText>
      <FormControl style={styles.filters}>
        <FormGroup>
          {uniqueDates.map((date) => (
            <FormControlLabel key={date} control={<Checkbox onChange={changeDateFilters} name={date} />} label={date} />
          ))}
        </FormGroup>
      </FormControl>
    </DialogContent>
    <DialogActions style={styles.addNoteButtons}>
      <Button style={styles.cancelFilter} onClick={() => setFilterDateOpen(false)} data-testid="cancelDateFilters">
        Cancel
      </Button>
      <Button style={styles.applyFilter} onClick={applyDateFilters} data-testid="applyDateFilters">
        Filter notes
      </Button>
    </DialogActions>
  </Dialog>
);
FilterDatesForm.propTypes = {
  uniqueDates: PropTypes.array,
  filterDateOpen: PropTypes.bool,
  setFilterDateOpen: PropTypes.func,
  applyDateFilters: PropTypes.func,
  changeDateFilters: PropTypes.func,
  changeFilterDateOpen: PropTypes.func,
};
export default FilterDatesForm;
