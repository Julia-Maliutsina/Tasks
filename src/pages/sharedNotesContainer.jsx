import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import useGetSharedNotes from "api/loadSharedPage";
import ActiveSharedNote from "components/shared/ActiveShared";
import SharedList from "components/shared/SharedList";
import styles from "pages/styled";

const SharedNotesContainer = ({ user }) => {
  const [pageShared, setPageShared] = useState(1);
  const [sharedNotes, setShared] = useGetSharedNotes(pageShared, user);
  const [sharedChosenNote, displaySharedNote] = useState(INIT.ACTIVE_SHARED);

  return (
    <div style={styles.maxWidth}>
      <ActiveSharedNote sharedChosenNote={sharedChosenNote} />
      <SharedList
        sharedNotes={sharedNotes}
        displaySharedNote={displaySharedNote}
        pageShared={pageShared}
        setPageShared={setPageShared}
      />
    </div>
  );
};
SharedNotesContainer.propTypes = {
  user: PropTypes.string,
};
export default SharedNotesContainer;
