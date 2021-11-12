import React, { useState } from "react";
import List from "@mui/material/List";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfiniteScroll from "react-infinite-scroll-component";

import MESSAGES from "../../src/config/constants/messages";

import styles from "../../src/pages/styled";
import applyNotesFilters from "../../src/utils/applyFilters";
import Note from "../../src/components/Note";

const Notes = ({
  noteChosen,
  allNotes,
  isLoading,
  isSuccess,
  filterDates,
  filterTitles,
}) => {
  const [page, setPage] = useState(1);
  const notes = applyNotesFilters(filterDates, filterTitles, allNotes);
  return (
    <div style={styles.allNotes}>
      {isLoading && (
        <CircularProgress
          style={styles.progressCircle}
          size={40}
          thickness={4}
          value={100}
          disableShrink
        />
      )}
      <DragDropContext
        onDragEnd={(parameters) => {
          const sourceIndex = parameters.source.index;
          const destinationIndex = parameters.destination.index;
          notes.splice(destinationIndex, 0, notes.splice(sourceIndex, 1)[0]);
        }}
      >
        {isSuccess && notes.length === 0 ? (
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
                    dataLength={isSuccess && notes.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    scrollableTarget="scrollableDiv"
                  >
                    {isSuccess &&
                      notes.map((note, i) => (
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
                                  ? "0 0 5px #ccc"
                                  : "none",
                                background: snapshot.isDragging
                                  ? "#edf5fc"
                                  : "inherit",
                              }}
                            >
                              <Note
                                note={note}
                                displayChosenNote={noteChosen}
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
  notes: PropTypes.arrayOf(PropTypes.object),
  noteChosen: PropTypes.func,
};

export default Notes;
