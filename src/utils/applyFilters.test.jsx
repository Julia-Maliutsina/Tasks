import applyNotesFilters from "./applyFilters";

const noteOne = { createdAt: "2011-10-05T14:48:00.000Z", title: "Title" };
const noteTwo = { createdAt: "2021-01-01T14:48:00.000Z", title: "Note" };
const noteThree = { createdAt: "2011-10-05T14:48:00.000Z", title: "Test" };
const notes = [noteOne, noteTwo, noteThree];
const dates = ["05.10.2011"];
const titles = ["Title", "Note"];

describe("returns notes filtered by:", () => {
  it("title", () => {
    const filtered = applyNotesFilters([], titles, notes);
    expect(filtered).toEqual(expect.arrayContaining([noteOne, noteTwo]));
  });
  it("date", () => {
    const filtered = applyNotesFilters(dates, [], notes);
    expect(filtered).toEqual(expect.arrayContaining([noteOne, noteThree]));
  });
  it("title and date", () => {
    const filtered = applyNotesFilters(dates, titles, notes);
    expect(filtered).toEqual(expect.arrayContaining([noteOne]));
  });
  it("without filters", () => {
    const filtered = applyNotesFilters([], [], notes);
    expect(filtered).toEqual(expect.arrayContaining(notes));
  });
});
