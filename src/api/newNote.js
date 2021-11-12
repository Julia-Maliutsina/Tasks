import axios from "axios"

import URLS from "../../src/config/constants/url"

const createNewNote = (newNoteTitle, newNoteText, user, store) => {
  axios({
    method: 'GET',
    url: URLS.SERVER_NOTES,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) => {
    const id = result.data.length;
    const date = new Date();
    const newNote = {
      "id": id,
      "title": newNoteTitle,
      "description": newNoteText,
      "createdAt": date.toISOString(),
      "updatedAt": date.toISOString()
    }
    return newNote
  })
  .then((newNote)=>
    axios({
      method: 'POST',
      url: URLS.SERVER_NOTES,
      headers: {Authorization: `Basic ${user}`},
      data: newNote,
    })
    .then((response)=> response)
  )
}

export default createNewNote