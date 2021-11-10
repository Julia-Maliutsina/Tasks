import axios from "axios";
import URLS from "../config/constants/url";

const submit = (values, submitAutorization, setAlertOpen) => {
  axios.get(URLS.FAKE_API).then((result) => {
    const users = result.data;
    for (let id = 0; id < users.length; id++) {
      if (
        users[id].email === values.email &&
        users[id].password === values.password
      ) {
        submitAutorization(id);
      } else {
        setAlertOpen(true);
      }
    }
  });
};

export default submit