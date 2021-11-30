import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "@mui/material/Link";
import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

import PATHS from "config/routes";
import INIT from "config/constants/initial";
import styles from "pages/styled";
import validateSignUp from "utils/validateSignUp";

const HIDE_ALERT = 3000;

const SignUpForm = ({
  submitRegistration,
  signUpAlert,
  signUpAlertOpen,
  setSignUpAlertOpen,
  setSignUpAlert,
  handleSignUpAlertClose,
}) => (
  <>
    <h2 style={styles.aboutTitle}>Registration</h2>
    <Formik
      initialValues={INIT.AUTH_VALUES}
      onSubmit={(values) => submitRegistration(values, setSignUpAlertOpen, setSignUpAlert)}
      validate={validateSignUp}
    >
      <Form style={styles.form}>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="name">
            First name
          </label>
          <Field style={styles.formInput} type="text" id="name" name="name" placeholder="Name" />
          <ErrorMessage name="name">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="surname">
            Last name
          </label>
          <Field style={styles.formInput} type="text" id="surname" name="surname" placeholder="Surname" />
          <ErrorMessage name="surname">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="email">
            Email
          </label>
          <Field style={styles.formInput} type="email" id="email" name="email" placeholder="myemail@mail.com" />
          <ErrorMessage name="email">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="birthday">
            Date of birth
          </label>
          <Field style={styles.formInput} type="date" id="birthday" name="birthday" />
          <ErrorMessage name="birthday">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="password">
            Password
          </label>
          <Field style={styles.formInput} type="password" id="password" name="password" />
          <ErrorMessage name="password">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <div style={styles.formBlock}>
          <label style={styles.formLabel} htmlFor="passwordConfirm">
            Confirm password
          </label>
          <Field style={styles.formInput} type="password" id="passwordConfirm" name="passwordConfirm" />
          <ErrorMessage name="passwordConfirm" style={styles.validationError}>
            {(ErrorText) => <div className="error">{ErrorText}</div>}
          </ErrorMessage>
        </div>
        <Link href={PATHS.alreadyRegistered} style={styles.authorizationLink}>
          Already have an account?
        </Link>
        <button style={styles.submitButton} type="submit">
          SIGN UP
        </button>
      </Form>
    </Formik>
    <Snackbar open={signUpAlertOpen} autoHideDuration={HIDE_ALERT} onClose={handleSignUpAlertClose}>
      <Alert onClose={handleSignUpAlertClose} severity="error" sx={styles.maxWidth}>
        {signUpAlert}
      </Alert>
    </Snackbar>
  </>
);
SignUpForm.propTypes = {
  submitRegistration: PropTypes.func,
  signUpAlert: PropTypes.string,
  signUpAlertOpen: PropTypes.bool,
  setSignUpAlertOpen: PropTypes.func,
  setSignUpAlert: PropTypes.func,
  handleSignUpAlertClose: PropTypes.func,
};
export default SignUpForm;
