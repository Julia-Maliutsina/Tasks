import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";

import Profile from "components/profile/Profile";
import ChangeProfileForm from "components/profile/ChangeProfileForm";
import ChangePasswordForm from "components/profile/ChangePasswordForm";
import updateProfile from "api/updateProfile";
import updatePassword from "api/updatePassword";

const ProfileContainer = ({ user, profileInfo, signOut }) => {
  const [userInfo, setUserInfo] = useState(profileInfo);
  const [profileOpen, setChangeProfileOpen] = useState(false);
  const [profileAlertOpen, setProfileAlertOpen] = useState(false);
  const [profileAlert, setProfileAlert] = useState("");
  const currentUserData = {
    name: userInfo.name,
    surname: userInfo.surname,
    birthday: userInfo.birthday,
  };
  const changeProfileOpen = () => {
    setChangeProfileOpen(!profileOpen);
  };
  const profileChangeClose = () => {
    setChangeProfileOpen(!profileOpen);
  };
  const handleProfileAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setProfileAlertOpen(!profileAlertOpen);
  };
  const submitChangeProfile = (values) => {
    updateProfile(user, values, setProfileAlertOpen, setProfileAlert, setChangeProfileOpen, setUserInfo);
  };
  const [passwordOpen, setChangePasswordOpen] = useState(false);
  const [passwordAlertOpen, setPasswordAlertOpen] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState("");
  const changePasswordOpen = () => {
    setChangePasswordOpen(!passwordOpen);
  };
  const passwordChangeClose = () => {
    setChangePasswordOpen(!passwordOpen);
  };
  const handlePasswordAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPasswordAlertOpen(!passwordAlertOpen);
  };
  const submitChangePassword = (values) => {
    updatePassword(user, values, setPasswordAlertOpen, setPasswordAlert, setChangePasswordOpen);
  };
  return (
    <div>
      <Profile
        userInfo={userInfo}
        changeProfileOpen={changeProfileOpen}
        changePasswordOpen={changePasswordOpen}
        signOut={signOut}
      />
      <ChangeProfileForm
        currentUserData={currentUserData}
        profileOpen={profileOpen}
        profileAlert={profileAlert}
        profileAlertOpen={profileAlertOpen}
        profileChangeClose={profileChangeClose}
        submitChangeProfile={submitChangeProfile}
        handleProfileAlertClose={handleProfileAlertClose}
      />
      <ChangePasswordForm
        passwordOpen={passwordOpen}
        passwordAlert={passwordAlert}
        passwordAlertOpen={passwordAlertOpen}
        passwordChangeClose={passwordChangeClose}
        submitChangePassword={submitChangePassword}
        handlePasswordAlertClose={handlePasswordAlertClose}
      />
    </div>
  );
};
ProfileContainer.propTypes = {
  user: PropTypes.string,
  profileInfo: PropTypes.object,
  signOut: PropTypes.func,
};
export default ProfileContainer;
