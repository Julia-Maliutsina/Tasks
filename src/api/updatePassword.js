import axios from "axios";
import URLS from "config/constants/url";;

const updateProfile = (user, values, setPasswordAlertOpen, setPasswordAlert, setChangePasswordOpen) => {
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
    setPasswordAlert(error.response.data)
  })
}

export default updateProfile