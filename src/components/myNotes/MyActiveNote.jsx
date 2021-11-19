import { TextareaAutosize, Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

import MESSAGES from "config/constants/messages";
import styles from "pages/styled";

import Save from "./actions/SaveButton";

const MyActiveNote = ({ active, newText, handleChange, alertOpen, saveChangedNote, handleAlertClose }) => (
  <div style={styles.relative}>
    <div className="chosenNote" style={styles.activeNote}>
      <h3 style={styles.title}>{active.title}</h3>
      <TextareaAutosize
        id="displayedNote"
        className="activeNote"
        minRows={null}
        maxLength={500}
        style={styles.text}
        value={newText}
        onChange={(event) => handleChange(event.target.value)}
      />
      <p style={styles.date}>{active.createdAt.substr(0, 10)}</p>
    </div>
    <Save title={"Save Changes"} buttonFunction={saveChangedNote} newText={newText} />
    <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="info" sx={styles.maxWidth}>
        {MESSAGES.NOT_CHOSEN}
      </Alert>
    </Snackbar>
  </div>
);
MyActiveNote.propTypes = {
  active: PropTypes.object,
  newText: PropTypes.string,
  handleChange: PropTypes.func,
  alertOpen: PropTypes.bool,
  saveChangedNote: PropTypes.func,
  handleAlertClose: PropTypes.func,
};
export default MyActiveNote;
