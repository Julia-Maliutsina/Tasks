const applyNotesFilters = (filterDates, filterTitles, notes)=>{
  if (filterDates.length>0) {
    notes = notes.filter(function (note) {
      return filterDates.indexOf(note.date) !== -1;
    })
  }
  if (filterTitles.length>0) {
    notes = notes.filter(function (note) {
      return filterTitles.indexOf(note.title) !== -1;
    })
  }
  return notes
}

export default applyNotesFilters