import axios from "axios"

import URLS from "config/constants/url"

const updateNotes = (note, id, user) => {
  const noteUrl = URLS.SERVER_NOTES + '/' + id;
	const noteUpdated = {
		"title": note.title,
		"description": note.description,
	}
	axios({
	  method: 'PUT',
	  url: noteUrl,
	  headers: {Authorization: `Bearer ${user}`},
	  data: noteUpdated,
	})
	.then((response) => response)
	.catch((error) => {
		if (error.name==="Forbidden") {
			/* store.dispatch({
				type: loadPage,
			})*/
		}
  })
}

export default updateNotes
