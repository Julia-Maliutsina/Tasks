import { useState } from "react";
import PropTypes from "prop-types";

import SignInForm from "components/SignIn";

const SignInContainer = ({ submitAutorization }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  return (
    <SignInForm
      submitAutorization={submitAutorization}
      handleAlertClose={handleAlertClose}
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
    />
  );
};
SignInContainer.propTypes = {
  submitAuthorization: PropTypes.func,
};
export default SignInContainer;
