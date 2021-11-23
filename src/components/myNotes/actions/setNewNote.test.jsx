import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewNoteForm from "./NewNoteForm";

const addNoteClose = jest.fn();
const newNoteOpen = true;
const setNewNoteTitle = jest.fn();
const setNewNoteText = jest.fn();
const addNoteSubmit = jest.fn();

describe("new note form:", () => {
  it("form renders", () => {
    render(
      <NewNoteForm
        addNoteClose={addNoteClose}
        newNoteOpen={newNoteOpen}
        setNewNoteTitle={setNewNoteTitle}
        setNewNoteText={setNewNoteText}
        addNoteSubmit={addNoteSubmit}
      />
    );
    expect(screen.getByText("New note")).toBeInTheDocument();
  });
  it("adding note works", () => {
    render(
      <NewNoteForm
        addNoteClose={addNoteClose}
        newNoteOpen={newNoteOpen}
        setNewNoteTitle={setNewNoteTitle}
        setNewNoteText={setNewNoteText}
        addNoteSubmit={addNoteSubmit}
      />
    );
    userEvent.type(screen.getByTestId("newTitle"), "test");
    expect(setNewNoteTitle).toHaveBeenCalledTimes(4);
    userEvent.type(screen.getByTestId("newText"), "test");
    expect(setNewNoteText).toHaveBeenCalledTimes(4);
    userEvent.click(screen.getByTestId("cancelNewNote"));
    expect(addNoteClose).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("submitNewNote"));
    expect(addNoteSubmit).toHaveBeenCalled();
  });
});
