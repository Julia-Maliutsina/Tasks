import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import styles from "./styled"

const initialValues = {
  email: "",
  name: "",
  surname: "",
  birthday: "",
  password: "",
  passwordConfirm: "",
}

const onSubmit = (values) => {
  console.log(values)
}

const validate = (values) => {
  let errors = {}
  if (!values.email) {
    errors.email = "*Required"
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = "*Invalid email format"
  }
  if (!values.name) {
    errors.name = "*Required"
  } else if (!/^[a-zA-Z\s-]*$/.test(values.name)) {
    errors.name = "*Please, enter your name in English"
  }
  if (!values.surname) {
    errors.surname = "*Required"
  } else if (!/^[a-zA-Z\s-]*$/.test(values.surname)) {
    errors.surname = "*Please, enter your last name in English"
  }
  if (!values.birthday) {
    errors.birthday = "*Required"
  }
  if (!values.password) {
    errors.password = "*Required"
  } else if (values.password.length < 9) {
    errors.password = "*Password must contain at least 9 characters"
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "*Required"
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "*Password is incorrect"
  }
  return errors
}

const SignUpForm = () => {
  return (
    <div>
      <h2 style={styles.aboutTitle}>Registration</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
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
          <button style={styles.submitButton} type="submit">
            SIGN UP
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUpForm
