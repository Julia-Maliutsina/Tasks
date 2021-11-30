import validateSignIn from "./validateSignIn";

const VALUES = { email: "email@mail.com", password: "123qwerty" };
const VALUES_EMAIL = { email: "email@mail.com" };
const VALUES_PASSWORD = { password: "123qwerty" };

describe("validate sing in form:", () => {
  it("with email and password", () => {
    const errors = validateSignIn(VALUES);
    expect(errors).toStrictEqual({});
  });
  it("with password", () => {
    const errors = validateSignIn(VALUES_PASSWORD);
    expect(errors).toStrictEqual({ email: "*Required" });
  });
  it("with email", () => {
    const errors = validateSignIn(VALUES_EMAIL);
    expect(errors).toStrictEqual({ password: "*Required" });
  });
  it("without email and password", () => {
    const errors = validateSignIn({});
    expect(errors).toStrictEqual({ email: "*Required", password: "*Required" });
  });
});
