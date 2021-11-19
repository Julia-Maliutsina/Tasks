import toLocalDate from "./toLocalDate";

const applyNotesFilters = (filterDates, filterTitles, loadedNotes) => {
  if (filterDates.length > 0) {
    loadedNotes = loadedNotes.filter(function (note) {
      return filterDates.indexOf(toLocalDate(note.createdAt)) !== -1;
    });
  }
  if (filterTitles.length > 0) {
    loadedNotes = loadedNotes.filter(function (note) {
      return filterTitles.indexOf(note.title) !== -1;
    });
  }
  return loadedNotes;
};

export default applyNotesFilters;
