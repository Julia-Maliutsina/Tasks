import axios from "axios"

import URLS from "config/constants/url"

const shareNoteWithUsers = (idToShare, usersToShare, user, setNoteToShare, ACTIVE_INIT, setUsersToShare, shareNoteOpen, setAlertShare, setShareError) => {
  const noteUrl = URLS.SERVER_SHARE + "/" + idToShare;
	axios({
	  method: 'PUT',
	  url: noteUrl,
	  headers: {Authorization: `Basic ${user}`},
	  data: {"users": usersToShare},
	})
	.then((response) => {
    setNoteToShare(ACTIVE_INIT);
    setUsersToShare([]);
    shareNoteOpen(false);
  })
	.catch((error) => {
    setAlertShare(true);
    setShareError(error.response.data);
  })
}

export default shareNoteWithUsers