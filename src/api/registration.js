import axios from "axios"
import { encode as base64_encode } from "base-64";

import URLS from "config/constants/url"

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
    let token = response.data.token;
		const profileInfo = {
			name: values.name,
			surname: values.surname,
			email: values.email,
			birthday: values.birthday,
			password: values.password,
		}
		token.toString();
		localStorage.setItem(
		  "isAuthorized",
		  JSON.stringify(true)
		)
		localStorage.setItem(
			"profileInfo",
			JSON.stringify(profileInfo)
		)
		localStorage.setItem(
			"token",
			JSON.stringify(token)
		)
		store.dispatch({
			type: "signUp",
			payload: { profileInfo, token },
		})
  })
	.catch((error) => {
		alert(error.response.data)
	})
}

export default submitRegistration
