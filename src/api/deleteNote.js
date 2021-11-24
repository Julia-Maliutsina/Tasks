import axios from "axios";

import URLS from "config/constants/url";

const deleteNote = (id, user, setNotes, setPage) => {
	const noteUrl = URLS.SERVER_NOTES + "/" + id;
	axios({
		method: "DELETE",
		url: noteUrl,
		headers: { Authorization: `Basic ${user}` },
	})
		.then((response) => {
			setPage(0);
			setNotes([]);
			setPage(1);
		})
		.catch((error) => error);
};

export default deleteNote;
