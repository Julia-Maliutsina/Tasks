import axios from "axios";
import URLS from "config/constants/url";
import toLocalDate from "utils/toLocalDate";

const updateProfile = (user, values, setProfileAlertOpen, setProfileAlert, setChangeProfileOpen, setUserInfo ) => {
  const userInfo = {
    firstName: values.name,
    lastName: values.surname,
    birthday: values.birthday
  }
	axios({
	  method: 'PUT',
	  url: URLS.SERVER_USERS,
	  headers: {Authorization: `Bearer ${user}`},
	  data: userInfo,
	})
	.then((response) =>{ 
    const userInfo = response.data;
    const profileInfo = {
      name: userInfo.firstName,
      surname: userInfo.lastName,
      birthday: toLocalDate(userInfo.birthday),
      email:userInfo.email,
    }
    localStorage.setItem(	"profileInfo", JSON.stringify(profileInfo));
    setUserInfo(profileInfo);
    setChangeProfileOpen(false);
  })
	.catch((error) => {
    setProfileAlertOpen(true);
    setProfileAlert(error.response.data)
  })
}

export default updateProfile