import axios from "axios"

import URLS from "../../src/config/constants/url"

const createNewNote = (notes, id) => {
  let users=[]
  axios
    .get(URLS.FAKE_API)
    .then((result) => {users = result.data})
    users[id].myNotes=notes
  axios
    .post(
      URLS.FAKE_API,
      users
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

}

export default createNewNote