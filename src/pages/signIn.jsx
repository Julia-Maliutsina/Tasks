import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"

import INITIAL_VALUES from "../config/constants/formsInitialValues"

import styles from "./styled"

const onSubmit = (values) => {
  axios
    .get("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542")
    .then((result) => {
      let users = result.data
      let isAuthorized = false
      let notes = {}
      let shared = {}
      for (let u = 0; u < users.length; u++) {
        if (
          users[u].email === values.email &&
          users[u].password === values.password
        ) {
          isAuthorized = true
          notes = users[u].myNotes
          shared = users[u].sharedNoted
          break
        }
      }
      if (!isAuthorized) {
        alert("Invalid email or password")
      }
      console.log(notes, shared)
    })
}

const validate = (values) => {
  let errors = {}
  if (!values.email) {
    errors.email = "*Required"
  }
  if (!values.password) {
    errors.password = "*Required"
  }
  return errors
}

const SignInForm = () => {
  return (
    <div>
      <h2 style={styles.aboutTitle}>Authorization</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
        validate={validate}
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
          <button style={styles.submitButton} type="submit">
            LOG IN
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignInForm
