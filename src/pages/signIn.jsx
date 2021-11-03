import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";

import INITIAL_VALUES from "../config/constants/formsInitialValues";
import validateSignIn from "../utils/validateSignIn";
import styles from "./styled";

const SignInForm = ({ submitAutorization }) => {
  return (
    <div>
      <h2 style={styles.aboutTitle}>Authorization</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={submitAutorization}
        validate={validateSignIn}
      >
        <Form style={styles.form}>
          <Alert severity="error" id="signInError" style={styles.error}>
            Invalid email or password! Please try again
          </Alert>
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
    </div>
  );
};

export default SignInForm;
