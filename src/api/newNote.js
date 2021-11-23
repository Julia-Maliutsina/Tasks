import axios from "axios";

import URLS from "config/constants/url";

const createNewNote = (
	newNoteTitle,
	newNoteText,
	user,
	setNotes,
	setPage
) => {
	const newNote = {
		title: newNoteTitle,
		description: newNoteText,
	};
	axios({
		method: "POST",
		url: URLS.SERVER_NOTES,
		headers: { Authorization: `Basic ${user}` },
		data: newNote,
	}).then((response) => {
		setPage(0);
		setNotes([]);
		setPage(1);
	});
};

export default createNewNote;
