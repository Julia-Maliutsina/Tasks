import axios from "axios"
import { encode as base64_encode } from "base-64";

import URLS from "config/constants/url"

const submitRegistration = (values, store) => {
	const encoded = base64_encode(values.email + ':' + values.password);
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
		const profileInfo = {
			name: values.name,
			surname: values.surname,
			email: values.email,
			birthday: values.birthday,
			password: values.password,
		}
		const user = encoded.toString();
		localStorage.setItem(
		  "isAuthorized",
		  JSON.stringify(true)
		)
		localStorage.setItem(
			"profileInfo",
			JSON.stringify(profileInfo)
		)
		localStorage.setItem(
			"encoded",
			JSON.stringify(encoded)
		)
		store.dispatch({
		type: "signUp",
		payload: { profileInfo, user },
		})
    })
	.catch((error) => {
		alert(error.response.data)
	})
}

export default submitRegistration
