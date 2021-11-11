const applyNotesFilters = (filterDates, filterTitles, notes) => {
  if (filterDates.length > 0) {
    notes = notes.filter(function (note) {
      return filterDates.indexOf(note.createdAt.substr(0, 10)) !== -1;
    });
  }
  if (filterTitles.length > 0) {
    notes = notes.filter(function (note) {
      return filterTitles.indexOf(note.title) !== -1;
    });
  }
  return notes;
};

export default applyNotesFilters;
