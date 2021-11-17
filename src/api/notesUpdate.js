import axios from "axios"

import URLS from "config/constants/url"

const updateNotes = (note, id, user) => {
  const noteUrl = URLS.SERVER_NOTES + '/' + id;
  const date = new Date();
	const noteUpdated = {
		"id": note.id,
		"title": note.title,
		"description": note.description,
		"createdAt": note.createdAt,
		"updatedAt": date.toISOString(),
	}
	axios({
	  method: 'PUT',
	  url: noteUrl,
	  headers: {Authorization: `Basic ${user}`},
	  data: noteUpdated,
	})
	.then((response) => response)
	.catch((error) => error)
}

export default updateNotes
