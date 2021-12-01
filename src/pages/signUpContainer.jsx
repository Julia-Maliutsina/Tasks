import React, { useState } from "react";
import PropTypes from "prop-types";

import SignUpForm from "components/SignUp";

const SignUpContainer = ({ submitRegistration }) => {
  const [signUpAlertOpen, setSignUpAlertOpen] = useState(false);
  const [signUpAlert, setSignUpAlert] = useState("");
  const handleSignUpAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSignUpAlertOpen(false);
  };
  return (
    <SignUpForm
      submitRegistration={submitRegistration}
      signUpAlert={signUpAlert}
      signUpAlertOpen={signUpAlertOpen}
      setSignUpAlertOpen={setSignUpAlertOpen}
      setSignUpAlert={setSignUpAlert}
      handleSignUpAlertClose={handleSignUpAlertClose}
    />
  );
};
SignUpContainer.propTypes = {
  submitRegistration: PropTypes.func,
};
export default SignUpContainer;
