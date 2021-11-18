import { useState } from "react";

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

export default SignInContainer;
