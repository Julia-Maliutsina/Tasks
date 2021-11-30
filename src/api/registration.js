import axios from "axios"
import { encode as base64_encode } from "base-64";

import URLS from "config/constants/url"
import toLocalDate from "utils/toLocalDate";

const submitRegistration = (values, store, setSignUpAlertOpen, setSignUpAlert) => {
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
		let refreshToken = response.data.refreshToken;
		let userInfo = response.data.user;
		const profileInfo = {
			name: userInfo.firstName,
			surname: userInfo.lastName,
			email: userInfo.email,
			birthday: toLocalDate(userInfo.birthday),
			password: userInfo.password,
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
		localStorage.setItem(
			"refreshToken",
			JSON.stringify(refreshToken)
		)
		store.dispatch({
			type: "signUp",
			payload: { profileInfo, token, refreshToken },
		})
  })
	.catch((error) => {
		setSignUpAlertOpen(true);
		setSignUpAlert(error.response.data);
	})
}

export default submitRegistration
