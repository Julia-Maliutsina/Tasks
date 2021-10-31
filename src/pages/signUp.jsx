import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"

import validateSignUp from "../utils/validateSignUp"
import INITIAL_VALUES from "../config/constants/formsInitialValues"

import styles from "./styled"

const onSubmit = (values) => {
  let newUser = {
    id: 2,
    name: values.name,
    surrname: values.surname,
    email: values.email,
    birthday: values.birthday,
    password: values.password,
    myNotes: [],
    sharedNotes: [],
  }
  console.log(newUser)
  axios
    .post("https://reqres.in/api/articles", newUser)
    .then((response) => console.log(response))
}

const SignUpForm = () => {
  return (
    <div>
      <h2 style={styles.aboutTitle}>Registration</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
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
          <button style={styles.submitButton} type="submit">
            SIGN UP
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUpForm
