import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Alert, Snackbar } from "@mui/material";
import { useState } from "react";

import INITIAL_VALUES from "../../src/config/constants/formsInitialValues";
import validateSignIn from "../../src/utils/validateSignIn";
import submit from "../api/submitSignIn";
import styles from "../../src/pages/styled";

const SignInForm = ({ submitAutorization }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <div>
      <h2 style={styles.aboutTitle}>Authorization</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values) => submit(values, submitAutorization, setAlertOpen)}
        validate={validateSignIn}
      >
        <Form style={styles.form}>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="email">
              Email
            </label>
            <Field
              style={styles.formInput}
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="password">
              Password
            </label>
            <Field
              style={styles.formInput}
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <Link href="./sign-up" style={styles.authorizationLink}>
            Don't have an account yet?
          </Link>
          <button style={styles.submitButton} type="submit">
            SIGN IN
          </button>
        </Form>
      </Formik>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={styles.maxWidth}
        >
          Invalid email or password!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignInForm;
