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

const FilterTitlesForm = ({
  filterTitleOpen,
  setFilterTitleOpen,
  uniqueTitles,
  changeTitleFilters,
  applyTitleFilters,
}) => (
  <Dialog open={filterTitleOpen} onClose={() => setFilterTitleOpen(false)}>
    <DialogTitle style={styles.newNote}>Filter by titles</DialogTitle>
    <DialogContent>
      <DialogContentText style={styles.addNoteMessage}>Choose notes to display</DialogContentText>
      <FormControl style={styles.filters}>
        <FormGroup>
          {uniqueTitles.map((title, i) => (
            <FormControlLabel key={i} control={<Checkbox onChange={changeTitleFilters} name={title} />} label={title} />
          ))}
        </FormGroup>
      </FormControl>
    </DialogContent>
    <DialogActions style={styles.addNoteButtons}>
      <Button style={styles.cancelFilter} onClick={() => setFilterTitleOpen(false)} data-testid="cancelTitleFilters">
        Cancel
      </Button>
      <Button style={styles.applyFilter} onClick={applyTitleFilters} data-testid="applyTitleFilters">
        Filter notes
      </Button>
    </DialogActions>
  </Dialog>
);
FilterTitlesForm.propTypes = {
  uniqueTitles: PropTypes.array,
  filterTitleOpen: PropTypes.bool,
  setFilterTitleOpen: PropTypes.func,
  applyTitleFilters: PropTypes.func,
  changeTitleFilters: PropTypes.func,
};
export default FilterTitlesForm;
