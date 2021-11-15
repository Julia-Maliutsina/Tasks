const applyNotesFilters = (filterDates, filterTitles, loadedNotes) => {
  if (filterDates.length > 0) {
    loadedNotes = loadedNotes.filter(function (note) {
      return filterDates.indexOf(note.createdAt.substr(0, 10)) !== -1;
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
