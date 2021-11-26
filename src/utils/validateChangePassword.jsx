const validateChangeProfile = (values) => {
  let errors = {};
  if (!values.oldPassword) {
    errors.oldPassword = "*Required";
  } else if (values.oldPassword.length < 9) {
    errors.oldPassword = "*Password must contain at least 9 characters";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 9) {
    errors.password = "*Password must contain at least 9 characters";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "*Required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "*Password is incorrect";
  }
  return errors;
};

export default validateChangeProfile;
