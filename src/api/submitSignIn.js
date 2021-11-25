import axios from "axios";
import {encode as base64_encode} from 'base-64';

import URLS from "config/constants/url";

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
    axios({
      method: 'GET',
      url: URLS.SERVER_AUTH,
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((result) => {
      const userInfo = result.data;
      const USER_INFO = {
        name: userInfo.firstName,
        surname: userInfo.lastName,
        birthday: userInfo.birthday.substr(0,10),
        email:userInfo.email,
      }
      submitAutorization(USER_INFO, token);
    })
    .catch((error) =>{
      setAlertOpen(true);
    })
  })
};

export default submit