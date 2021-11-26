import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

import MESSAGES from "config/constants/messages";
import styles from "pages/styled";

import NoteShared from "./NoteShared";

const SharedList = ({ sharedNotes, displaySharedNote, pageShared, setPageShared }) => {
  if (!sharedNotes.length) {
    return (
      <div style={styles.sharedNotesGrid} id="scrollableShared" data-testid="scrollableShared">
        <Alert variant="filled" severity="info" id="saveNoteError" style={styles.noSharedNotes}>
          {MESSAGES.NO_SHARED_NOTES}
        </Alert>
      </div>
    );
  }
  if (sharedNotes.length) {
    return (
      <div style={styles.sharedNotesGrid} id="scrollableShared" data-testid="scrollableShared">
        <InfiniteScroll
          dataLength={sharedNotes.length}
          next={() => setPageShared(pageShared + 1)}
          hasMore
          scrollableTarget="scrollableShared"
        >
          <Box sx={styles.shareGrid}>
            {sharedNotes.map((note) => (
              <NoteShared key={note.id} note={note} displaySharedNote={displaySharedNote} />
            ))}
          </Box>
        </InfiniteScroll>
      </div>
    );
  }
};
SharedList.propTypes = {
  sharedNotes: PropTypes.arrayOf(PropTypes.object),
  displaySharedNote: PropTypes.func,
  pageShared: PropTypes.number,
  setPageShared: PropTypes.func,
};
export default SharedList;
