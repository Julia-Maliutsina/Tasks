import { screen, render } from "@testing-library/react";

import SignUpForm from "./signUp";

const submitRegistration = jest.fn();

describe("sing up form", () => {
  it("form renders", () => {
    render(<SignUpForm submitRegistration={submitRegistration} />);
    expect(screen.queryByText("Registration")).toBeInTheDocument();
  });
});
