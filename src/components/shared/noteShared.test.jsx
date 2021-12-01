import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NoteShared from "./NoteShared";

const NOTE = {
  title: "title",
  description: "description",
  createdAt: "2011-10-05T14:48:00.000Z",
};
const displaySharedNote = jest.fn();

describe("each note", () => {
  it("renders note element", () => {
    render(<NoteShared note={NOTE} displaySharedNote={displaySharedNote} />);
    expect(screen.getByText("description...")).toBeInTheDocument();
  });
  it("on click displays shared note", () => {
    render(<NoteShared note={NOTE} displaySharedNote={displaySharedNote} />);
    userEvent.click(screen.getByTestId("sharedNoteInList"));
    expect(displaySharedNote).toHaveBeenCalled();
  });
});
