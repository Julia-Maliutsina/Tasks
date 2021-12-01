import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";

import PATHS from "config/routes";
import INIT from "config/constants/initial";
import submit from "api/submitSignIn";
import validateSignIn from "utils/validateSignIn";
import styles from "pages/styled";

const HIDE_ALERT = 3000;

const SignInForm = ({ submitAutorization, handleAlertClose, alertOpen, setAlertOpen }) => (
  <>
    <h2 style={styles.aboutTitle}>Authorization</h2>
    <Formik
      initialValues={INIT.AUTH_VALUES}
      onSubmit={(values) => submit(values, submitAutorization, setAlertOpen)}
      validate={validateSignIn}
    >
      <Form style={styles.form}>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="email">
            Email
          </label>
          <Field style={styles.formInput} type="email" id="email" name="email" />
          <ErrorMessage name="email">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="password">
            Password
          </label>
          <Field style={styles.formInput} type="password" id="password" name="password" />
          <ErrorMessage name="password">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <Link href={PATHS.notRegistered} style={styles.authorizationLink}>
          Don't have an account yet?
        </Link>
        <button style={styles.submitButton} type="submit">
          SIGN IN
        </button>
      </Form>
    </Formik>
    <Snackbar open={alertOpen} autoHideDuration={HIDE_ALERT} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="error" sx={styles.maxWidth}>
        Invalid email or password!
      </Alert>
    </Snackbar>
  </>
);
SignInForm.propTypes = {
  submitAutorization: PropTypes.func,
  handleAlertClose: PropTypes.func,
  alertOpen: PropTypes.bool,
  setAlertOpen: PropTypes.func,
};
export default SignInForm;
