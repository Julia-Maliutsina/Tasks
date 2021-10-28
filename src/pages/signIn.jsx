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
	if (!values.password) {
		errors.password = "*Required"
	} else if (values.password.length < 9) {
		errors.password = "*Password must contain at least 9 characters"
	}
	return errors
}

const SignInForm = () => {
	return (
		<div>
			<h2 style={styles.aboutTitle}>Authorization</h2>
			<Formik
				initialValues={initialValues}
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
						<ErrorMessage name="email" />
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
						<ErrorMessage name="password" />
					</div>
					<button style={styles.submitButton} type="submit">
						SIGN IN
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default SignInForm
