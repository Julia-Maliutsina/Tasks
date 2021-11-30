import axios from "axios";

import URLS from "config/constants/url";

import refreshToken from "./refreshToken";

const createNewNote = (
	newNoteTitle,
	newNoteText,
	user,
	setNotes,
	setPage,
	setAlertNew,
	setNewError,
	setOpen, 
	refresh,
	store
) => {
	const newNote = {
		title: newNoteTitle,
		description: newNoteText,
	};
	axios({
		method: "POST",
		url: URLS.SERVER_NOTES,
		headers: { Authorization: `Bearer ${user}` },
		data: newNote,
	}).then((response) => {
		setOpen(false);
		setPage(0);
		setNotes([]);
		setPage(1);
	})
	.catch((error) => {
    setAlertNew(true);
    setNewError(error.response.data);
		error.response.data==="Forbidden" && refreshToken(refresh, user, store);
  })
};

export default createNewNote;
