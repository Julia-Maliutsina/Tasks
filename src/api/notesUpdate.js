import axios from "axios"

import URLS from "config/constants/url"

import refreshToken from "./refreshToken";

const updateNotes = (note, id, user, refresh, store) => {
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
		error.response.data==="Forbidden" && refreshToken(refresh, user, store);
	})
}

export default updateNotes
