import applyNotesFilters from "./applyFilters";

const NOTE_ONE = { createdAt: "2011-10-05T14:48:00.000Z", title: "Title" };
const NOTE_TWO = { createdAt: "2021-01-01T14:48:00.000Z", title: "Note" };
const NOTE_THREE = { createdAt: "2011-10-05T14:48:00.000Z", title: "Test" };
const NOTES = [NOTE_ONE, NOTE_TWO, NOTE_THREE];
const DATES = ["05.10.2011"];
const TITLES = ["Title", "Note"];

describe("returns notes filtered by:", () => {
  it("title", () => {
    const filtered = applyNotesFilters([], TITLES, NOTES);
    expect(filtered).toEqual(expect.arrayContaining([NOTE_ONE, NOTE_TWO]));
  });
  it("date", () => {
    const filtered = applyNotesFilters(DATES, [], NOTES);
    expect(filtered).toEqual(expect.arrayContaining([NOTE_ONE, NOTE_THREE]));
  });
  it("title and date", () => {
    const filtered = applyNotesFilters(DATES, TITLES, NOTES);
    expect(filtered).toEqual(expect.arrayContaining([NOTE_ONE]));
  });
  it("without filters", () => {
    const filtered = applyNotesFilters([], [], NOTES);
    expect(filtered).toEqual(expect.arrayContaining(NOTES));
  });
});
