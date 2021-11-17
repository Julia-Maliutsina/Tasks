import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ButtonGroup,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  Snackbar,
  ListItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import MESSAGES from "config/constants/messages";

import Notes from "../components/NotesList";
import Save from "../components/SaveButton";

import "../pages/App.css";
import styles from "../pages/styled.js";

const MyNotes = ({
  filterNotesByDate,
  filterNotesByTitle,
  filterTitleOpen,
  filterDateOpen,
  discardFilters,
  setFilterDateOpen,
  setFilterTitleOpen,
  uniqueDates,
  uniqueTitles,
  changeDateFilters,
  applyDateFilters,
  changeTitleFilters,
  applyTitleFilters,
  addNoteOpen,
  addNoteClose,
  newNoteOpen,
  setNewNoteTitle,
  setNewNoteText,
  addNoteSubmit,
  showChosenNote,
  notesToDisplay,
  setPage,
  page,
  changePosition,
  shareNote,
  removeNote,
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
  active,
  newText,
  handleChange,
  saveChangedNote,
  alertOpen,
  handleAlertClose,
  alertShareOpen,
  handleAlertShareClose,
  shareError,
}) => (
  <div style={styles.maxWidth}>
    <Box sx={styles.myNotesGrid}>
      <div>
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
          <Dialog open={newNoteOpen} onClose={addNoteClose}>
            <DialogTitle style={styles.newNote}>New note</DialogTitle>
            <DialogContent>
              <DialogContentText style={styles.addNoteMessage}>
                Enter title and description of your new note.
              </DialogContentText>
              <TextareaAutosize
                id="title"
                placeholder="Title"
                className="activeNote"
                minRows={null}
                maxLength={40}
                minLength={1}
                style={styles.newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
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
              />
            </DialogContent>
            <DialogActions style={styles.addNoteButtons}>
              <Button style={styles.cancelButton} onClick={addNoteClose}>
                <CancelIcon style={styles.saveIcon} />
                Cancel
              </Button>
              <Button
                style={styles.primaryButton}
                variant="contained"
                onClick={addNoteSubmit}
              >
                <SaveIcon style={styles.saveIcon} />
                Save note
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={filterDateOpen}
            onClose={() => setFilterDateOpen(false)}
          >
            <DialogTitle style={styles.newNote}>Filter by dates</DialogTitle>
            <DialogContent>
              <DialogContentText style={styles.addNoteMessage}>
                Choose dates to display
              </DialogContentText>
              <FormControl style={styles.filters}>
                <FormGroup>
                  {uniqueDates.map((date, i) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={changeDateFilters} name={date} />
                      }
                      label={date}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </DialogContent>
            <DialogActions style={styles.addNoteButtons}>
              <Button
                style={styles.cancelFilter}
                onClick={() => setFilterDateOpen(false)}
              >
                Cancel
              </Button>
              <Button style={styles.applyFilter} onClick={applyDateFilters}>
                Filter notes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={filterTitleOpen}
            onClose={() => setFilterTitleOpen(false)}
          >
            <DialogTitle style={styles.newNote}>Filter by titles</DialogTitle>
            <DialogContent>
              <DialogContentText style={styles.addNoteMessage}>
                Choose notes to display
              </DialogContentText>
              <FormControl style={styles.filters}>
                <FormGroup>
                  {uniqueTitles.map((title, i) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={changeTitleFilters} name={title} />
                      }
                      label={title}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </DialogContent>
            <DialogActions style={styles.addNoteButtons}>
              <Button
                style={styles.cancelFilter}
                onClick={() => setFilterTitleOpen(false)}
              >
                Cancel
              </Button>
              <Button style={styles.applyFilter} onClick={applyTitleFilters}>
                Filter notes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Notes
          noteChosen={showChosenNote}
          notesToDisplay={notesToDisplay}
          setPage={setPage}
          page={page}
          changePosition={changePosition}
          shareNote={shareNote}
          removeNote={removeNote}
        />
      </div>
      <Dialog open={openShare} onClose={() => {}}>
        <DialogTitle style={styles.shareNote}>Share note</DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.dialogShare}>
            <h4 style={styles.shareNoteTitles}>Title:</h4>
            <p style={styles.shareNoteText}>{noteToShare.title}</p>
            <h4 style={styles.shareNoteTitles}>Description:</h4>
            <p style={styles.shareNoteText}>{noteToShare.description}</p>
            <h4 style={styles.shareNoteTitles}>Date:</h4>
            <p style={styles.shareNoteText}>
              {noteToShare.createdAt.substr(0, 10)}
            </p>
          </DialogContentText>
          <DialogContentText style={styles.shareNoteTitles}>
            Share with:
          </DialogContentText>
          {usersToShare.map((email, emailId) => (
            <ListItem style={styles.emailsList}>
              <span style={styles.widthEmail}>{email}</span>
              <IconButton
                style={styles.clearUsers}
                onClick={(e) => removeUser(emailId)}
              >
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
          <Snackbar
            open={alertShareOpen}
            autoHideDuration={3000}
            onClose={handleAlertShareClose}
          >
            <Alert
              onClose={handleAlertShareClose}
              severity="error"
              sx={styles.maxWidth}
            >
              {shareError}
            </Alert>
          </Snackbar>
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
        <Save
          title={"Save Changes"}
          buttonFunction={saveChangedNote}
          newText={newText}
        />
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity="info"
            sx={styles.maxWidth}
          >
            {MESSAGES.NOT_CHOSEN}
          </Alert>
        </Snackbar>
      </div>
    </Box>
  </div>
);

export default MyNotes;
