import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  Button,
  IconButton,
  Alert,
  Snackbar,
  ListItem,
} from "@mui/material";
import { Cancel, IosShare, Add, Clear } from "@mui/icons-material";
import PropTypes from "prop-types";

import styles from "pages/styled";
import toLocalDate from "utils/toLocalDate";

const HIDE_ALERT = 3000;

const ShareNoteForm = ({
  openShare,
  noteToShare,
  usersToShare,
  removeUser,
  setUser,
  setUserToShare,
  userEmailValue,
  addUserToList,
  cancelShare,
  shareNoteSubmit,
  alertShareOpen,
  handleAlertShareClose,
  shareError,
}) => (
  <Dialog open={openShare} onClose={() => {}}>
    <DialogTitle style={styles.shareNote}>Share note</DialogTitle>
    <DialogContent>
      <DialogContentText style={styles.dialogShare}>
        <h4 style={styles.shareNoteTitles}>Title:</h4>
        <p style={styles.shareNoteText}>{noteToShare.title}</p>
        <h4 style={styles.shareNoteTitles}>Description:</h4>
        <p style={styles.shareNoteText}>{noteToShare.description}</p>
        <h4 style={styles.shareNoteTitles}>Date:</h4>
        <p style={styles.shareNoteText}>{toLocalDate(noteToShare.createdAt)}</p>
      </DialogContentText>
      <DialogContentText style={styles.shareNoteTitles}>Share with:</DialogContentText>
      {usersToShare.map((email, emailId) => (
        <ListItem style={styles.emailsList}>
          <span style={styles.widthEmail}>{email}</span>
          <IconButton style={styles.clearUsers} onClick={(e) => removeUser(emailId)} data-testid="removeUser">
            <Clear fontSize="small" />
          </IconButton>
        </ListItem>
      ))}
      <TextareaAutosize
        id="userToShare"
        placeholder="user@gmail.com"
        value={userEmailValue}
        className="activeNote"
        minRows={null}
        maxLength={40}
        minLength={5}
        style={styles.userToShare}
        onFocus={() => setUser("")}
        onChange={(e) => setUserToShare(e.target.value)}
      />
      <Button style={styles.addUsers} onClick={addUserToList} data-testid="addUser">
        <Add fontSize="small" color="inherit" style={styles.inline} />
        <span>Add</span>
      </Button>
      <Snackbar open={alertShareOpen} autoHideDuration={HIDE_ALERT} onClose={handleAlertShareClose}>
        <Alert onClose={handleAlertShareClose} severity="error" sx={styles.maxWidth}>
          {shareError}
        </Alert>
      </Snackbar>
    </DialogContent>
    <DialogActions style={styles.addNoteButtons}>
      <Button style={styles.cancelShareButton} onClick={cancelShare} data-testid="cancelShare">
        <Cancel style={styles.saveIcon} />
        Cancel
      </Button>
      <Button style={styles.primaryButton} variant="contained" onClick={shareNoteSubmit} data-testid="submitShare">
        <IosShare style={styles.saveIcon} />
        Share
      </Button>
    </DialogActions>
  </Dialog>
);
ShareNoteForm.propTypes = {
  openShare: PropTypes.bool,
  noteToShare: PropTypes.object,
  usersToShare: PropTypes.array,
  removeUser: PropTypes.func,
  setUser: PropTypes.func,
  setUserToShare: PropTypes.func,
  userEmailValue: PropTypes.string,
  addUserToList: PropTypes.func,
  cancelShare: PropTypes.func,
  shareNoteSubmit: PropTypes.func,
  alertShareOpen: PropTypes.bool,
  handleAlertShareClose: PropTypes.func,
  shareError: PropTypes.string,
};
export default ShareNoteForm;
