import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import InfiniteScroll from "react-infinite-scroll-component";

import MESSAGES from "config/constants/messages";
import styles from "pages/styled";

import NoteShared from "./NoteShared";

const SharedList = ({ sharedNotes, sharedChosenNote, showChosenSharedNote, pageShared, setPageShared }) => (
  <div style={styles.maxWidth}>
    <div className="chosenSharedNote" style={styles.activeSharedNote}>
      <h3 style={styles.sharedTitle}>{sharedChosenNote.title}</h3>
      <p style={styles.sharedText}>{sharedChosenNote.description}</p>
      <p style={styles.date}>
        {sharedChosenNote.createdAt.substr(0, 10)}
        <div style={{ marginLeft: "77%", display: "inline-block", width: "230px", textAlign: "right" }}>
          {sharedChosenNote.author}
        </div>
      </p>
    </div>
    <div style={styles.sharedNotesGrid} id="scrollableShared">
      {sharedNotes.length === 0 ? (
        <Alert variant="filled" severity="info" id="saveNoteError" style={styles.noSharedNotes}>
          {MESSAGES.NO_SHARED_NOTES}
        </Alert>
      ) : (
        <InfiniteScroll
          dataLength={sharedNotes.length}
          next={() => setPageShared(pageShared + 1)}
          hasMore={true}
          scrollableTarget="scrollableShared"
        >
          <Box sx={styles.shareGrid}>
            {sharedNotes.map((note, i) => {
              return <NoteShared id={i} note={note} displaySharedNote={showChosenSharedNote} />;
            })}
          </Box>
        </InfiniteScroll>
      )}
    </div>
  </div>
);

export default SharedList;
