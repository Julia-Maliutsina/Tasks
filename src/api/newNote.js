import axios from "axios"

import URLS from "../../src/config/constants/url"

const createNewNote = (newNoteTitle, newNoteText, user, setNotes, setPage) => {
  let notes=[];
  const date = new Date();
  function getNotes(page) {
    axios({
      method: 'GET',
      url: URLS.SERVER_PAGE + page,
      headers: {Authorization: `Basic ${user}`}
    })
    .then((result) => {
      for (let item = 0; item<result.data.length; item++){
        notes.push(result.data[item])
      }
      if (result.data.length>4) {
        getNotes(page+1)
      }
      else {
        const ID = notes.length + 1;
        const newNote = {
          "id": ID,
          "title": newNoteTitle,
          "description": newNoteText,
          "createdAt": date.toISOString(),
          "updatedAt": date.toISOString()
        }
        axios({
          method: 'POST',
          url: URLS.SERVER_NOTES,
          headers: {Authorization: `Basic ${user}`},
          data: newNote,
        })
        .then((response) => {   
          setNotes([]);
          setPage(1);
        })
      }
    })
  }

  getNotes(1);
}

export default createNewNote