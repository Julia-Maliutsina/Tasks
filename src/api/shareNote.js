import axios from "axios"

import URLS from "config/constants/url"
import INIT from "config/constants/initial";

const shareNoteWithUsers = (idToShare, usersToShare, user, setNoteToShare, setUsersToShare, shareNoteOpen, setAlertShare, setShareError) => {
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
    if (error.name==="Forbidden") {
      /* store.dispatch({
        type: loadPage,
      })*/
    }
    setAlertShare(true);
    setShareError(error.response.data);
  })
}

export default shareNoteWithUsers