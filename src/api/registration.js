import axios from "axios"

import URLS from "../../src/config/constants/url"

const submitRegistration = (values, store) => {
	const newUser = {
		email: values.email,
		password: values.password,
		firstName: values.name,
		lastName: values.surname,
		birthday: values.birthday,
	  }
  axios
	.post(
      URLS.SERVER_USERS,
	  newUser
	)
	.then((response) => {
	  axios
		.get(
		URLS.FAKE_API
		)
		.then((result) => {
		const id = result.data.length
		console.log(id)
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
    })
	.catch((error) => {
		alert(error.response.data)
	})
}

export default submitRegistration
