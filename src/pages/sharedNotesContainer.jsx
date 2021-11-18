import React from "react";
import { useState } from "react";

import INIT from "config/constants/initial";
import useGetSharedNotes from "api/loadSharedPage";
import SharedList from "components/shared/SharedList";

const SharedNotesContainer = ({ user, store }) => {
  const [pageShared, setPageShared] = useState(1);
  const [sharedNotes, setShared] = useGetSharedNotes(pageShared, user);
  const [sharedChosenNote, displaySharedNote] = useState(INIT.ACTIVE_SHARED);

  function showChosenSharedNote(id) {
    displaySharedNote(sharedNotes[id]);
  }

  return (
    <SharedList
      sharedNotes={sharedNotes}
      sharedChosenNote={sharedChosenNote}
      showChosenSharedNote={showChosenSharedNote}
      pageShared={pageShared}
      setPageShared={setPageShared}
    />
  );
};

export default SharedNotesContainer;
