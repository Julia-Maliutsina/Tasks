import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

import MESSAGES from "config/constants/messages";
import styles from "pages/styled";
import changePosition from "utils/changePosition";

import NoteContainer from "./NoteContainer";

const Notes = ({ displayChosenNote, notesToDisplay, setPage, page, shareNote, removeNote }) => {
  let notesList = [];
  !notesToDisplay.length
    ? (notesList = (
        <div style={styles.allNotes}>
          <Alert variant="filled" severity="info" id="saveNoteError" style={styles.noNotes}>
            {MESSAGES.NO_NOTES}
          </Alert>
        </div>
      ))
    : (notesList = (
        <div style={styles.allNotes}>
          <DragDropContext
            onDragEnd={(parameters) => {
              changePosition(parameters, notesToDisplay);
            }}
          >
            <Droppable droppableId="droppable-1">
              {(provided, snapshot) => (
                <div
                  id="scrollableDiv"
                  style={styles.droppable}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  data-testid="scrollableList"
                >
                  <List>
                    <InfiniteScroll
                      dataLength={notesToDisplay.length}
                      next={() => setPage(page + 1)}
                      hasMore
                      scrollableTarget="scrollableDiv"
                    >
                      {notesToDisplay.map((note, i) => (
                        <Draggable draggableId={"draggable" + i} key={note.id} index={i}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                boxShadow: snapshot.isDragging ? styles.draggingShadow : "none",
                                background: snapshot.isDragging ? styles.draggingBackground : "inherit",
                              }}
                            >
                              <NoteContainer
                                note={note}
                                displayChosenNote={displayChosenNote}
                                shareNote={shareNote}
                                removeNote={removeNote}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </InfiniteScroll>
                  </List>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ));
  return notesList;
};
Notes.propTypes = {
  notesToDisplay: PropTypes.arrayOf(PropTypes.object),
  displayChosenNote: PropTypes.func,
  setPage: PropTypes.func,
  page: PropTypes.number,
  shareNote: PropTypes.func,
  removeNote: PropTypes.func,
};
export default Notes;
