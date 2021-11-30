import axios from "axios";

import URLS from "config/constants/url";

import refreshToken from "./refreshToken";

const deleteNote = (id, user, setNotes, setPage, refresh, store) => {
	const noteUrl = URLS.SERVER_NOTES + "/" + id;
	axios({
		method: "DELETE",
		url: noteUrl,
		headers: { Authorization: `Bearer ${user}` },
	})
		.then((response) => {
			setPage(0);
			setNotes([]);
			setPage(1);
		})
		.catch((error) => {
			setNotes([]);
			setPage(1);		
			error.response.data==="Forbidden" && refreshToken(refresh, user, store);	
		});
};

export default deleteNote;
