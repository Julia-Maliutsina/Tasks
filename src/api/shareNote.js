import axios from "axios"

import URLS from "config/constants/url"
import INIT from "config/constants/initial";

import refreshToken from "./refreshToken";

const shareNoteWithUsers = (idToShare, usersToShare, user, setNoteToShare, setUsersToShare, shareNoteOpen, setAlertShare, setShareError, refresh, store) => {
  const noteUrl = URLS.SERVER_SHARE + "/" + idToShare;
	axios({
	  method: 'PUT',
	  url: noteUrl,
	  headers: {Authorization: `Basic ${user}`},
	  data: {"users": usersToShare},
	})
	.then((response) => {
    setNoteToShare(INIT.ACTIVE);
    setUsersToShare([]);
    shareNoteOpen(false);
  })
	.catch((error) => {
    setAlertShare(true);
    setShareError(error.response.data);
    error.response.data==="Forbidden" && refreshToken(refresh, user, store);
  })
}

export default shareNoteWithUsers