import { render, screen, fireEvent } from "@testing-library/react";
import Notes from "./NotesList";

const notesToDisplay = [
  {
    title: "title",
    description: "description",
    createdAt: "2011-10-05T14:48:00.000Z",
  },
  {
    title: "title",
    description: "description",
    createdAt: "2011-10-05T14:48:00.000Z",
  },
  {
    title: "title",
    description: "description",
    createdAt: "2011-10-05T14:48:00.000Z",
  },
];
const displayChosenNote = jest.fn();
const setPage = jest.fn();
const page = 1;
const changePosition = jest.fn();
const shareNote = jest.fn();
const removeNote = jest.fn();

describe("notes list", () => {
  it("renders notes list with infinite scroll", () => {
    render(
      <Notes
        displayChosenNote={displayChosenNote}
        notesToDisplay={notesToDisplay}
        setPage={setPage}
        page={page}
        changePosition={changePosition}
        shareNote={shareNote}
        removeNote={removeNote}
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    const scrollable = screen.getByTestId("scrollableList");
    fireEvent.scroll(scrollable, { target: { scrollY: 100 } });
    expect(setPage).toHaveBeenCalledWith(2);
  });
  it("renders without notes", () => {
    render(
      <Notes
        displayChosenNote={displayChosenNote}
        notesToDisplay={[]}
        setPage={setPage}
        page={page}
        changePosition={changePosition}
        shareNote={shareNote}
        removeNote={removeNote}
      />
    );
  });
});
