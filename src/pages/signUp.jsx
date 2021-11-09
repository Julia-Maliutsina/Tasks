import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "@mui/material/Link";

import INITIAL_VALUES from "../../src/config/constants/formsInitialValues";
import validateSignUp from "../../src/utils/validateSignUp";

import styles from "../../src/pages/styled";

const SignUpForm = ({ submitRegistration }) => {
  return (
    <div>
      <h2 style={styles.aboutTitle}>Registration</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={submitRegistration}
        validate={validateSignUp}
      >
        <Form style={styles.form}>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="name">
              First name
            </label>
            <Field
              style={styles.formInput}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="surname">
              Last name
            </label>
            <Field
              style={styles.formInput}
              type="text"
              id="surname"
              name="surname"
              placeholder="Surname"
            />
            <ErrorMessage name="surname">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="email">
              Email
            </label>
            <Field
              style={styles.formInput}
              type="email"
              id="email"
              name="email"
              placeholder="myemail@mail.com"
            />
            <ErrorMessage name="email">
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="birthday">
              Date of birth
            </label>
            <Field
              style={styles.formInput}
              type="date"
              id="birthday"
              name="birthday"
            />
            <ErrorMessage name="birthday">
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
          <div style={styles.formBlock}>
            <label style={styles.formLabel} htmlFor="passwordConfirm">
              Confirm password
            </label>
            <Field
              style={styles.formInput}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
            />
            <ErrorMessage name="passwordConfirm" style={styles.validationError}>
              {(ErrorText) => <div className="error">{ErrorText}</div>}
            </ErrorMessage>
          </div>
          <Link href="./sign-in" style={styles.authorizationLink}>
            Already have an account?
          </Link>
          <button style={styles.submitButton} type="submit">
            SIGN UP
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
