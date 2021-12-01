import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MyNotes from "./myNotes";

const PROFILE = {
  email: "emai@mail.com",
  name: "Name",
  surname: "Surname",
  birthday: "1990-01-01",
};
const signOut = jest.fn();
const user = "";
const submitRegistration = jest.fn;
const submitAutorization = jest.fn;
const store = {};

describe("my notes component", () => {
  it("renders menu for unauthorized user", () => {
    render(
      <MyNotes
        profileInfo={PROFILE}
        isAuthorized={false}
        user={user}
        submitRegistration={submitRegistration}
        submitAutorization={submitAutorization}
        signOut={signOut}
        store={store}
      />
    );
    const menuLinks = screen.getAllByRole("link");
    expect(menuLinks.length).toEqual(5);
  });
  it("renders menu for authorized user", () => {
    render(
      <MyNotes
        profileInfo={PROFILE}
        isAuthorized={true}
        user={user}
        submitRegistration={submitRegistration}
        submitAutorization={submitAutorization}
        signOut={signOut}
        store={store}
      />
    );
    expect(screen.queryByText("Profile")).toBeInTheDocument();
    const menuLinks = screen.getAllByRole("link");
    expect(menuLinks.length).toEqual(4);
  });
  it("menu navigation works if authorized", () => {
    render(
      <MyNotes
        profileInfo={PROFILE}
        isAuthorized={true}
        user={user}
        submitRegistration={submitRegistration}
        submitAutorization={submitAutorization}
        signOut={signOut}
        store={store}
      />
    );
    userEvent.click(screen.getByText("About"));
    expect(screen.getByText("About «My Notes»")).toBeInTheDocument();
    userEvent.click(screen.getByText("Shared Notes"));
    expect(screen.getByText("Select note to display")).toBeInTheDocument();
    const myNotes = screen.getAllByText("My Notes");
    userEvent.click(myNotes[1]);
    expect(screen.getByText("Select note to display")).toBeInTheDocument();
    userEvent.click(screen.getByText("Profile"));
    expect(screen.queryByText("Name")).toBeInTheDocument();
    userEvent.click(screen.getAllByRole("button")[2]);
    expect(signOut).toHaveBeenCalled();
  });
  it("menu navigation works if unauthorized", () => {
    render(
      <MyNotes
        profileInfo={PROFILE}
        isAuthorized={false}
        user={user}
        submitRegistration={submitRegistration}
        submitAutorization={submitAutorization}
        signOut={signOut}
        store={store}
      />
    );
    userEvent.click(screen.getByText("Shared Notes"));
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    const myNotes = screen.getAllByText("My Notes");
    userEvent.click(myNotes[1]);
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign in"));
    expect(screen.getByText("Authorization")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign up"));
    expect(screen.getByText("Registration")).toBeInTheDocument();
  });
});
