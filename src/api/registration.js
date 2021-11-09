import axios from "axios"

const submitRegistration = (values, store, id) => {
	axios
		.get(
			"https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542"
		)
		.then((result) => {
			id = result.data.length
		})

	const newUser = {
		email: values.email,
		password: values.password,
		firstName: values.name,
		lastName: values.surname,
		birthday: values.birthday,
	}
	axios
		.post(
			"https://note-app-training-server.herokuapp.com/api/users",
			newUser
		)
		.then((response) => {
			const profileInfo = {
				userId: id,
				name: values.name,
				surname: values.surname,
				email: values.email,
				birthday: values.birthday,
				password: values.password,
			}
			store.dispatch({
				type: "signUp",
				payload: { profileInfo },
			})
		})
		.catch((error) => {
			if (error.response.data.hasErrors) {
				const errors = error.response.data
				if (errors.email) {
					alert(errors.email)
				}
				if (errors.password) {
					alert(errors.password)
				}
				if (errors.firstName) {
					alert(errors.firstName)
				} else {
					if (errors.lastName) {
						alert(errors.lastName)
					}
				}
			}
		})
}

export default submitRegistration
