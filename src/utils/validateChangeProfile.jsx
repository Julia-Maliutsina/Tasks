const validateChangeProfile = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "*Required";
  } else if (!/^[a-zA-Z\s-]*$/.test(values.name)) {
    errors.name = "*Please, enter your name in English";
  }
  if (!values.surname) {
    errors.surname = "*Required";
  } else if (!/^[a-zA-Z\s-]*$/.test(values.surname)) {
    errors.surname = "*Please, enter your last name in English";
  }
  if (!values.birthday) {
    errors.birthday = "*Required";
  }
  return errors;
};

export default validateChangeProfile;
