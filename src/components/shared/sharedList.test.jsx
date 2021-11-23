import { render, screen, fireEvent } from "@testing-library/react";

import SharedList from "./SharedList";

const sharedNotes = [
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
const displaySharedNote = jest.fn();
const setPageShared = jest.fn();
const pageShared = 1;

describe("list of shared notes", () => {
  it("renders notes list", () => {
    render(
      <SharedList
        sharedNotes={sharedNotes}
        displaySharedNote={displaySharedNote}
        pageShared={pageShared}
        setPageShared={setPageShared}
      />
    );
    const scrollableShared = screen.getByTestId("scrollableShared");
    expect(scrollableShared).toBeInTheDocument();
    fireEvent.scroll(scrollableShared, { target: { scrollY: 100 } });
    expect(setPageShared).toHaveBeenCalledWith(2);
  });
});
