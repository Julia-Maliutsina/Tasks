import axios from "axios";

import URLS from "config/constants/url";

const createNewNote = (
	newNoteTitle,
	newNoteText,
	user,
	setNotes,
	setPage,
	setAlertNew,
	setNewError,
	setOpen
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
		if (error.name==="Forbidden") {
      /* store.dispatch({
        type: loadPage,
      })*/
    }
    setAlertNew(true);
    setNewError(error.response.data);
  })
};

export default createNewNote;
