import { render, screen } from "@testing-library/react";

import WelcomePage from "./Main";

describe("renders welcome message for:", () => {
  it("authorized user", () => {
    render(<WelcomePage isAuthorized={true} name="User" />);
    const message = screen.queryByText("User, welcome to «My Notes» !");
    expect(message).toBeInTheDocument();
  });
  it("unauthorized user", () => {
    render(<WelcomePage isAuthorized={false} name="" />);
    const message = screen.queryByText("Welcome to «My Notes» !");
    expect(message).toBeInTheDocument();
  });
});
