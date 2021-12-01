import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Note from "./Note";

const NOTE = {
  title: "title",
  description: "description",
  createdAt: "2011-10-05T14:48:00.000Z",
};
const displayChosenNote = jest.fn();
const shareNote = jest.fn();
const setNoteToRemove = jest.fn();

describe("each note", () => {
  it("renders note element", () => {
    render(
      <Note note={NOTE} displayChosenNote={displayChosenNote} shareNote={shareNote} setNoteToRemove={setNoteToRemove} />
    );
    expect(screen.getByText("description...")).toBeInTheDocument();
  });
  it("display note on click", () => {
    render(
      <Note note={NOTE} displayChosenNote={displayChosenNote} shareNote={shareNote} setNoteToRemove={setNoteToRemove} />
    );
    userEvent.click(screen.getByTestId("noteInList"));
    expect(displayChosenNote).toHaveBeenCalled();
  });
  it("share note on click", () => {
    render(
      <Note note={NOTE} displayChosenNote={displayChosenNote} shareNote={shareNote} setNoteToRemove={setNoteToRemove} />
    );
    userEvent.click(screen.getByTestId("shareNote"));
    expect(shareNote).toHaveBeenCalled();
  });
  it("delete note on click", () => {
    render(
      <Note note={NOTE} displayChosenNote={displayChosenNote} shareNote={shareNote} setNoteToRemove={setNoteToRemove} />
    );
    userEvent.click(screen.getByTestId("deleteNote"));
    expect(setNoteToRemove).toHaveBeenCalled();
  });
});
