import axios from "axios"

import URLS from "../../src/config/constants/url"

const updateNotes = (notes, id) => {
  let users = [];
  axios
	.get(
      URLS.FAKE_API
	)
	.then((result) => {
	  users = result.data
	  users[id].myNotes = notes
      return users
	})
	.then((users) =>
	  axios.post(
		URLS.FAKE_API,
		users
	  )
	)
	.catch((error) => error)
}

export default updateNotes
