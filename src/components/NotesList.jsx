import React, { useState } from "react";
import List from "@mui/material/List";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfiniteScroll from "react-infinite-scroll-component";

import MESSAGES from "../../src/config/constants/messages";

import Note from "./Note";
import styles from "../pages/styled";

const Notes = ({ userId, noteChosen }) => {
  const { data, isSuccess, isLoading } = useQuery("shared", () =>
    fetch("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542").then(
      (res) => res.json()
    )
  );

  const [page, setPage] = useState(1);
  return (
    <div style={styles.allNotes}>
      {isLoading && (
        <CircularProgress
          style={{
            marginLeft: "48%",
            marginTop: "50px",
          }}
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
          data[userId].myNotes.splice(
            destinationIndex,
            0,
            data[userId].myNotes.splice(sourceIndex, 1)[0]
          );
        }}
      >
        {isSuccess && !data[userId] ? (
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
                style={{ height: 450, overflow: "auto" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <List>
                  <InfiniteScroll
                    dataLength={isSuccess && data[userId].myNotes.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                    {isSuccess &&
                      data[userId].myNotes.map((note, i) => (
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
                  </InfiniteScroll>
                </List>
                {provided.placeholder}
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
