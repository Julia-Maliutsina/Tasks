import axios from "axios";
import {encode as base64_encode} from 'base-64';

import URLS from "config/constants/url";

const submit = (values, submitAutorization, setAlertOpen) => {
  const encoded = base64_encode(values.email + ':' + values.password);
  axios({
    method: 'GET',
    url: URLS.SERVER_AUTH,
    headers: {Authorization: `Basic ${encoded}`}
  })
  .then((result) => {
    const user = result.data;
    const USER_INFO = {
      name: user.firstName,
      surname: user.lastName,
      birthday: user.birthday.substr(0,10),
      email:user.email,
    }
    submitAutorization(USER_INFO, encoded);
  })
  .catch((error) =>{
    setAlertOpen(true);
  })
};

export default submit