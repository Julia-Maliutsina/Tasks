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
  loadedNotes,
  filterDates,
  filterTitles,
  setPage,
  page,
}) => {
  const notesToDisplay = applyNotesFilters(
    filterDates,
    filterTitles,
    loadedNotes
  );
  return (
    <div style={styles.allNotes}>
      <DragDropContext
        onDragEnd={(parameters) => {
          const sourceIndex = parameters.source.index;
          const destinationIndex = parameters.destination.index;
          notesToDisplay.splice(
            destinationIndex,
            0,
            notesToDisplay.splice(sourceIndex, 1)[0]
          );
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
                                ? "0 0 5px #ccc"
                                : "none",
                              background: snapshot.isDragging
                                ? "#edf5fc"
                                : "inherit",
                            }}
                          >
                            <Note note={note} displayChosenNote={noteChosen} />
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
