import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShareNoteForm from "./ShareNoteForm";

const openShare = true;
const noteToShare = {
  title: "title",
  description: "description",
  createdAt: "2011-10-05T14:48:00.000Z",
};
const usersToShare = ["user"];
const removeUser = jest.fn();
const setUser = jest.fn();
const setUserToShare = jest.fn();
const userEmailValue = "";
const addUserToList = jest.fn();
const cancelShare = jest.fn();
const shareNoteSubmit = jest.fn();
const alertShareOpen = false;
const handleAlertShareClose = jest.fn();
const shareError = "";

describe("share note form:", () => {
  it("form renders", () => {
    render(
      <ShareNoteForm
        openShare={openShare}
        noteToShare={noteToShare}
        usersToShare={usersToShare}
        removeUser={removeUser}
        setUser={setUser}
        setUserToShare={setUserToShare}
        userEmailValue={userEmailValue}
        addUserToList={addUserToList}
        cancelShare={cancelShare}
        shareNoteSubmit={shareNoteSubmit}
        alertShareOpen={alertShareOpen}
        handleAlertShareClose={handleAlertShareClose}
        shareError={shareError}
      />
    );
    expect(screen.getByText("Share note")).toBeInTheDocument();
  });
  it("adding and removing user from list works", () => {
    render(
      <ShareNoteForm
        openShare={openShare}
        noteToShare={noteToShare}
        usersToShare={usersToShare}
        removeUser={removeUser}
        setUser={setUser}
        setUserToShare={setUserToShare}
        userEmailValue={userEmailValue}
        addUserToList={addUserToList}
        cancelShare={cancelShare}
        shareNoteSubmit={shareNoteSubmit}
        alertShareOpen={alertShareOpen}
        handleAlertShareClose={handleAlertShareClose}
        shareError={shareError}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "test");
    expect(setUserToShare).toHaveBeenCalledTimes(4);
    userEvent.click(screen.getByTestId("addUser"));
    expect(addUserToList).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("removeUser"));
    expect(removeUser).toHaveBeenCalled();
  });
});
