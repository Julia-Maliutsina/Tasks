import MESSAGES from "./messages";

const ID = -1;
const ID_MINIMAL = 0;
const PAGE = 1;

const ACTIVE = {
  id: ID,
  title: MESSAGES.NOTES_INIT,
  description: "",
  createdAt: "",
};

const ACTIVE_SHARED = {
  title: MESSAGES.NOTES_INIT,
  description: "",
  createdAt: "",
  author: ""
};

const AUTH_VALUES = {
  email: "",
  name: "",
  surname: "",
  birthday: "",
  password: "",
  passwordConfirm: "",
};

const INIT = {
  ID,
  ID_MINIMAL,
  PAGE,
  ACTIVE,
  ACTIVE_SHARED,
  AUTH_VALUES
}

export default INIT

