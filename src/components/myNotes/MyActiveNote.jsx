import { TextareaAutosize, Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

import MESSAGES from "config/constants/messages";
import styles from "pages/styled";
import toLocalDate from "utils/toLocalDate";

import Save from "./actions/SaveButton";

const HIDE_ALERT = 3000;

const MyActiveNote = ({ active, newText, handleChange, alertOpen, saveChangedNote, handleAlertClose }) => (
  <div style={styles.relative}>
    <div className="chosenNote" style={styles.activeNote}>
      <h3 style={styles.title}>{active.title}</h3>
      <TextareaAutosize
        id="displayedNote"
        className="activeNote"
        minRows={null}
        style={styles.text}
        value={newText}
        onChange={(event) => handleChange(event.target.value)}
      />
      <p style={styles.date}>{toLocalDate(active.createdAt)}</p>
    </div>
    <Save title={"Save Changes"} buttonFunction={saveChangedNote} newText={newText} />
    <Snackbar open={alertOpen} autoHideDuration={HIDE_ALERT} onClose={handleAlertClose}>
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
