import { useState } from "react";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import shareNoteWithUsers from "api/shareNote";

import ShareNoteForm from "./ShareNoteForm";

const ShareNoteContainer = ({ user, openShare, noteToShare, setNoteToShare, shareNoteOpen }) => {
  const [userEmailValue, setUser] = useState("");
  const [usersToShare, setUsersToShare] = useState([]);
  const [alertShareOpen, setAlertShare] = useState(false);
  const [shareError, setShareError] = useState("");

  const setUserToShare = (userEmail) => {
    setUser(userEmail);
  };
  const addUserToList = () => {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(userEmailValue)) {
      setAlertShare(true);
      setShareError("Invalid email format");
    } else {
      let usersArray = usersToShare;
      usersArray.push(userEmailValue);
      setUsersToShare(usersArray);
      setUser("");
    }
  };
  const shareNoteSubmit = () => {
    shareNoteWithUsers(
      noteToShare.id,
      usersToShare,
      user,
      setNoteToShare,
      setUsersToShare,
      shareNoteOpen,
      setAlertShare,
      setShareError
    );
  };
  const cancelShare = () => {
    setNoteToShare(INIT.ACTIVE);
    setUsersToShare([]);
    setUser("");
    shareNoteOpen(false);
  };
  const removeUser = (emailId) => {
    let usersArray = usersToShare;
    usersArray.splice(emailId, 1);
    setUsersToShare(usersArray);
    setUser(" ");
  };
  const handleAlertShareClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertShare(false);
  };
  return (
    <ShareNoteForm
      openShare={openShare}
      noteToShare={noteToShare}
      usersToShare={usersToShare}
      removeUser={removeUser}
      setUser={setUser}
      setUserToShare={setUserToShare}
      userEmailValue={userEmailValue}
      addUserToList={addUserToList}
      cancelShare={cancelShare}
      shareNoteSubmit={shareNoteSubmit}
      alertShareOpen={alertShareOpen}
      handleAlertShareClose={handleAlertShareClose}
      shareError={shareError}
    />
  );
};
ShareNoteContainer.propTypes = {
  user: PropTypes.string,
  openShare: PropTypes.bool,
  noteToShare: PropTypes.object,
  setNoteToShare: PropTypes.func,
  shareNoteOpen: PropTypes.func,
};
export default ShareNoteContainer;
