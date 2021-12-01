import MESSAGES from "./messages";

const ID = 0;
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
const CHANGE_PASSWORD = {
  oldPassword: "",
  password: "",
  passwordConfirm: "",
}
const INIT = {
  ID,
  PAGE,
  ACTIVE,
  ACTIVE_SHARED,
  AUTH_VALUES,
  CHANGE_PASSWORD
}
export default INIT

