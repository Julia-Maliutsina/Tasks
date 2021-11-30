import axios from "axios";

import URLS from "config/constants/url";
import toLocalDate from "utils/toLocalDate";

const submit = (values, submitAutorization, setAlertOpen) => {
  const USER = {
    email: values.email,
    password: values.password
  }
  axios({
    method: 'POST',
    url: URLS.SERVER_AUTH,
    data: USER,
  })
  .then((response)=>{
    const token = response.data.token;
    let refreshToken = response.data.refreshToken;
    const userInfo = response.data.user;
    const USER_INFO = {
      name: userInfo.firstName,
      surname: userInfo.lastName,
      birthday: toLocalDate(userInfo.birthday),
      email:userInfo.email,
    }
    submitAutorization(USER_INFO, token, refreshToken);
  })
  .catch((error) =>{
    setAlertOpen(true);
  })
};

export default submit