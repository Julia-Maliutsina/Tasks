import axios from "axios";

import URLS from "../../src/config/constants/url";

const getProfile = (
  store,
  id
) => {
  axios
	.get(
      URLS.FAKE_API
	)
	.then((result) => {
	  const users = result.data
	  const profileInfo = {
		name: users[id].name,
		surname: users[id].surname,
		birthday: users[id].birthday,
		email: users[id].email,
	  }
	  store.dispatch({
		type: "signIn",
		payload: { profileInfo, id},
	  })
	})
}

export default getProfile
