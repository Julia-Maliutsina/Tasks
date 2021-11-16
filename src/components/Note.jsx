import React from "react";
import {
  IconButton,
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Dialog,
  TextareaAutosize,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";

import styles from "../../src/pages/styled";
import shortenDescription from "../../src/utils/noteShortDescription";

const Note = ({
  note,
  displayChosenNote,
  shareNote,
  openShare,
  usersToShare,
  userEmailValue,
  setUserToShare,
  addUserToList,
  cancelShare,
  shareNoteSubmit,
}) => {
  return (
    <ListItem divider>
      <ListItemButton
        onClick={() => {
          displayChosenNote(note);
        }}
      >
        <ListItemText
          primary={
            <Typography style={styles.noteTitle}>{note.title}</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline-block" }}
                component="span"
                style={styles.noteInList}
                className="shortDescription"
              >
                {shortenDescription(note.description)}
              </Typography>
              {note.createdAt.substr(0, 10)}
            </React.Fragment>
          }
          style={styles.noteInList}
        />
      </ListItemButton>
      <IconButton
        onClick={(e) => shareNote(e, note)}
        color="inherit"
        component="span"
      >
        <IosShareIcon />
      </IconButton>
      <Dialog open={openShare} onClose={() => {}}>
        <DialogTitle style={styles.shareNote}>Share note</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ width: 300 }}>
            <h4 style={styles.shareNoteTitles}>Title:</h4>
            <p style={styles.shareNoteText}>{note.title}</p>
            <h4 style={styles.shareNoteTitles}>Description:</h4>
            <p style={styles.shareNoteText}>{note.description}</p>
            <h4 style={styles.shareNoteTitles}>Date:</h4>
            <p style={styles.shareNoteText}>{note.createdAt.substr(0, 10)}</p>
          </DialogContentText>
          <DialogContentText style={styles.shareNoteTitles}>
            Share with:
          </DialogContentText>
          {usersToShare.map((email) => (
            <ListItem style={styles.emailsList}>{email}</ListItem>
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
            onChange={(e) => setUserToShare(e.target.value)}
          />
          <Button style={styles.addUsers} onClick={addUserToList}>
            <AddIcon
              fontSize="small"
              color="inherit"
              style={{ display: "inline" }}
            />
            <span>Add</span>
          </Button>
        </DialogContent>
        <DialogActions style={styles.addNoteButtons}>
          <Button style={styles.cancelShareButton} onClick={cancelShare}>
            <CancelIcon style={styles.saveIcon} />
            Cancel
          </Button>
          <Button
            style={styles.primaryButton}
            variant="contained"
            onClick={shareNoteSubmit}
          >
            <IosShareIcon style={styles.saveIcon} />
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};
Note.propTypes = {
  note: PropTypes.object,
  displayChosenNote: PropTypes.func,
};

export default Note;
