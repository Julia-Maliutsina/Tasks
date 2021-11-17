import React from "react";
import { useState } from "react";

import MESSAGES from "config/constants/messages";

import useGetSharedNotes from "../api/loadSharedPage";

import SharedList from "../components/SharedList";

const SharedNotesContainer = ({ user, store }) => {
  const ACTIVE_SHARED_INIT = {
    title: MESSAGES.NOTES_INIT,
    description: "",
    createdAt: "",
  };

  const [pageShared, setPageShared] = useState(1);
  const [sharedNotes, setShared] = useGetSharedNotes(pageShared, user);
  const [sharedChosenNote, displaySharedNote] = useState(ACTIVE_SHARED_INIT);

  function showChosenSharedNote(id) {
    displaySharedNote(sharedNotes[id]);
  }

  return (
    <SharedList
      sharedNotes={sharedNotes}
      sharedChosenNote={sharedChosenNote}
      showChosenSharedNote={showChosenSharedNote}
    />
  );
};

export default SharedNotesContainer;
