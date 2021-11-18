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

import CancelIcon from "@mui/icons-material/Cancel";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "pages/styled";

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
        <p style={styles.shareNoteText}>{noteToShare.createdAt.substr(0, 10)}</p>
      </DialogContentText>
      <DialogContentText style={styles.shareNoteTitles}>Share with:</DialogContentText>
      {usersToShare.map((email, emailId) => (
        <ListItem style={styles.emailsList}>
          <span style={styles.widthEmail}>{email}</span>
          <IconButton style={styles.clearUsers} onClick={(e) => removeUser(emailId)}>
            <ClearIcon fontSize="small" />
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
      <Button style={styles.addUsers} onClick={addUserToList}>
        <AddIcon fontSize="small" color="inherit" style={styles.inline} />
        <span>Add</span>
      </Button>
      <Snackbar open={alertShareOpen} autoHideDuration={3000} onClose={handleAlertShareClose}>
        <Alert onClose={handleAlertShareClose} severity="error" sx={styles.maxWidth}>
          {shareError}
        </Alert>
      </Snackbar>
    </DialogContent>
    <DialogActions style={styles.addNoteButtons}>
      <Button style={styles.cancelShareButton} onClick={cancelShare}>
        <CancelIcon style={styles.saveIcon} />
        Cancel
      </Button>
      <Button style={styles.primaryButton} variant="contained" onClick={shareNoteSubmit}>
        <IosShareIcon style={styles.saveIcon} />
        Share
      </Button>
    </DialogActions>
  </Dialog>
);

export default ShareNoteForm;
