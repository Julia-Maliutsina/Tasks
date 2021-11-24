import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonsNotes from "./ButtonsNotes";

const applyDatesFilter = jest.fn();
const applyTitlesFilter = jest.fn();
const addNoteOpen = jest.fn();
const newNoteOpen = false;
const addNoteClose = jest.fn();
const setNewNoteTitle = jest.fn();
const setNewNoteText = jest.fn();
const addNoteSubmit = jest.fn();
const filterNotesByTitle = jest.fn();
const filterNotesByDate = jest.fn();
const discardFilters = jest.fn();
const setFilterDateOpen = jest.fn();
const setFilterTitleOpen = jest.fn();
const setDateFilters = jest.fn();
const setTitleFilters = jest.fn();

describe("buttons in My Notes:", () => {
  it("buttons work", () => {
    render(
      <ButtonsNotes
        uniqueDates={[]}
        uniqueTitles={[]}
        applyDatesFilter={applyDatesFilter}
        applyTitlesFilter={applyTitlesFilter}
        addNoteOpen={addNoteOpen}
        newNoteOpen={newNoteOpen}
        addNoteClose={addNoteClose}
        setNewNoteTitle={setNewNoteTitle}
        setNewNoteText={setNewNoteText}
        addNoteSubmit={addNoteSubmit}
        filterNotesByTitle={filterNotesByTitle}
        filterNotesByDate={filterNotesByDate}
        discardFilters={discardFilters}
        filterDateOpen={false}
        filterTitleOpen={false}
        setFilterDateOpen={setFilterDateOpen}
        setFilterTitleOpen={setFilterTitleOpen}
        filterDatesArray={[]}
        filterTitlesArray={[]}
        setDateFilters={setDateFilters}
        setTitleFilters={setTitleFilters}
      />
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Add note:")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("filterByTitles"));
    expect(filterNotesByTitle).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("filterByDates"));
    expect(filterNotesByDate).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("discardFilters"));
    expect(discardFilters).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("addNote"));
    expect(addNoteOpen).toHaveBeenCalled();
  });
});
