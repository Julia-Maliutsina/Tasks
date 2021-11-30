import axios from "axios";
import URLS from "config/constants/url";

import refreshToken from "./refreshToken";

const updateProfile = (user, values, setPasswordAlertOpen, setPasswordAlert, setChangePasswordOpen, refresh, store) => {
  const passwords = {
    oldPassword: values.oldPassword,
    newPassword: values.password};
	axios({
	  method: 'PUT',
	  url: URLS.SERVER_PASSWORD,
	  headers: {Authorization: `Bearer ${user}`},
	  data: passwords,
	})
	.then((response) =>{ 
    setChangePasswordOpen(false);
  })
	.catch((error) => {
    setPasswordAlertOpen(true);
    setPasswordAlert(error.response.data);
    error.response.data==="Forbidden" && refreshToken(refresh, user, store);
  })
}

export default updateProfile