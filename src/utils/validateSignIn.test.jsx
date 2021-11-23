import validateSignIn from "./validateSignIn";

const values = { email: "email@mail.com", password: "123qwerty" };
const valuesEmail = { email: "email@mail.com" };
const valuesPassword = { password: "123qwerty" };

describe("validate sing in form:", () => {
  it("with email and password", () => {
    const errors = validateSignIn(values);
    expect(errors).toStrictEqual({});
  });
  it("with password", () => {
    const errors = validateSignIn(valuesPassword);
    expect(errors).toStrictEqual({ email: "*Required" });
  });
  it("with email", () => {
    const errors = validateSignIn(valuesEmail);
    expect(errors).toStrictEqual({ password: "*Required" });
  });
  it("without email and password", () => {
    const errors = validateSignIn({});
    expect(errors).toStrictEqual({ email: "*Required", password: "*Required" });
  });
});
