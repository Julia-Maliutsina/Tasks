import List from "@mui/material/List";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfiniteScroll from "react-infinite-scroll-component";

import MESSAGES from "config/constants/messages";

import styles from "../../src/pages/styled";

import Note from "./Note";

const Notes = ({
  noteChosen,
  notesToDisplay,
  setPage,
  page,
  changePosition,
  shareNote,
  removeNote,
}) => {
  return (
    <div style={styles.allNotes}>
      <DragDropContext
        onDragEnd={(parameters) => {
          changePosition(parameters);
        }}
      >
        {notesToDisplay.length === 0 ? (
          <Alert
            variant="filled"
            severity="info"
            id="saveNoteError"
            style={styles.noNotes}
          >
            {MESSAGES.NO_NOTES}
          </Alert>
        ) : (
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div
                id="scrollableDiv"
                style={styles.droppable}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <List>
                  <InfiniteScroll
                    dataLength={notesToDisplay.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    scrollableTarget="scrollableDiv"
                  >
                    {notesToDisplay.map((note, i) => (
                      <Draggable
                        draggableId={"draggable" + i}
                        key={i}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              boxShadow: snapshot.isDragging
                                ? styles.draggingShadow
                                : "none",
                              background: snapshot.isDragging
                                ? styles.draggingBackground
                                : "inherit",
                            }}
                          >
                            <Note
                              note={note}
                              displayChosenNote={noteChosen}
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
        )}
      </DragDropContext>
    </div>
  );
};

Notes.propTypes = {
  notesToDisplay: PropTypes.arrayOf(PropTypes.object),
  noteChosen: PropTypes.func,
};

export default Notes;
