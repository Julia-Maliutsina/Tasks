import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";

import styles from "pages/styled";

const NewNoteForm = ({
  addNoteClose,
  newNoteOpen,
  setNewNoteTitle,
  setNewNoteText,
  addNoteSubmit,
  newNoteError,
  alertNewOpen,
  handleAlertNewClose,
}) => (
  <Dialog open={newNoteOpen} onClose={addNoteClose}>
    <DialogTitle style={styles.newNote}>New note</DialogTitle>
    <DialogContent>
      <DialogContentText style={styles.addNoteMessage}>Enter title and description of your new note.</DialogContentText>
      <TextareaAutosize
        id="title"
        placeholder="Title"
        className="activeNote"
        minRows={null}
        maxLength={40}
        minLength={1}
        style={styles.newNoteTitle}
        onChange={(e) => setNewNoteTitle(e.target.value)}
        data-testid="newTitle"
      />
      <TextareaAutosize
        id="text"
        placeholder="Description"
        className="activeNote"
        minRows={null}
        maxLength={500}
        minLength={1}
        style={styles.newNoteText}
        onChange={(e) => setNewNoteText(e.target.value)}
        data-testid="newText"
      />
      <Snackbar open={alertNewOpen} autoHideDuration={3000} onClose={handleAlertNewClose}>
        <Alert onClose={handleAlertNewClose} severity="error" sx={styles.maxWidth}>
          {newNoteError}
        </Alert>
      </Snackbar>
    </DialogContent>
    <DialogActions style={styles.addNoteButtons}>
      <Button style={styles.cancelButton} onClick={addNoteClose} data-testid="cancelNewNote">
        <CancelIcon style={styles.saveIcon} />
        Cancel
      </Button>
      <Button style={styles.primaryButton} variant="contained" onClick={addNoteSubmit} data-testid="submitNewNote">
        <SaveIcon style={styles.saveIcon} />
        Save note
      </Button>
    </DialogActions>
  </Dialog>
);
NewNoteForm.propTypes = {
  newNoteOpen: PropTypes.bool,
  addNoteClose: PropTypes.func,
  setNewNoteTitle: PropTypes.func,
  setNewNoteText: PropTypes.func,
  addNoteSubmit: PropTypes.func,
  newNoteError: PropTypes.string,
  alertNewOpen: PropTypes.bool,
  handleAlertNewClose: PropTypes.func,
};
export default NewNoteForm;
