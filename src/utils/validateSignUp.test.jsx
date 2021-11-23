import validateSignUp from "./validateSignUp";

const valuesCorrect = {
  email: "emai@mail.com",
  name: "Name",
  surname: "Surname",
  birthday: "1990-01-01",
  password: "123qwerty",
  passwordConfirm: "123qwerty",
};
const valuesIncorrect = {
  email: "mail",
  name: "Имя1",
  surname: "Фамилия1",
  birthday: "1990-01-01",
  password: "qwerty",
  passwordConfirm: "123",
};
const valuesEmpty = {
  email: "",
  name: "",
  surname: "",
  birthday: "",
  password: "",
  passwordConfirm: "",
};
const errorsIncorrect = {
  email: "*Invalid email format",
  name: "*Please, enter your name in English",
  surname: "*Please, enter your last name in English",
  password: "*Password must contain at least 9 characters",
  passwordConfirm: "*Password is incorrect",
};
const errorsEmpty = {
  email: "*Required",
  name: "*Required",
  surname: "*Required",
  birthday: "*Required",
  password: "*Required",
  passwordConfirm: "*Required",
};

describe("validate sing up form:", () => {
  it("all fields correct", () => {
    const errors = validateSignUp(valuesCorrect);
    expect(errors).toStrictEqual({});
  });
  it("all fields incorrect", () => {
    const errors = validateSignUp(valuesIncorrect);
    expect(errors).toStrictEqual(errorsIncorrect);
  });
  it("all fields empty", () => {
    const errors = validateSignUp(valuesEmpty);
    expect(errors).toStrictEqual(errorsEmpty);
  });
});
