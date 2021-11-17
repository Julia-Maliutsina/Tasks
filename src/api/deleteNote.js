import axios from "axios";

import URLS from "../../src/config/constants/url";

const deleteNote = (id, user, setNotes, setPage) => {
	const NOTE_URL = URLS.SERVER_NOTES + "/" + id;
	axios({
		method: "DELETE",
		url: NOTE_URL,
		headers: { Authorization: `Basic ${user}` },
	})
		.then((response) => {
			setNotes([]);
			setPage(1);
			console.log(response);
		})
		.catch((error) => error);
};

export default deleteNote;
