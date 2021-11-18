import FilterDatesForm from "./FilterDatesForm";
import FilterTitlesForm from "./FilterTitlesForm";

const FiltersContainer = ({
  applyDatesFilter,
  applyTitlesFilter,
  uniqueDates,
  uniqueTitles,
  filterDateOpen,
  filterTitleOpen,
  setFilterDateOpen,
  setFilterTitleOpen,
  filterDatesArray,
  filterTitlesArray,
  setDateFilters,
  setTitleFilters,
}) => {
  const changeDateFilters = (event) => {
    if (event.target.checked) {
      filterDatesArray.push(event.target.name);
      setDateFilters(filterDatesArray);
    } else {
      let date = filterDatesArray.indexOf(event.target.name);
      filterDatesArray.splice(date, date);
    }
  };

  const applyDateFilters = () => {
    applyDatesFilter(filterDatesArray);
    setFilterDateOpen(false);
    localStorage.setItem("filterDatesArray", JSON.stringify(filterDatesArray));
  };

  const changeTitleFilters = (event) => {
    if (event.target.checked) {
      filterTitlesArray.push(event.target.name);
      setTitleFilters(filterTitlesArray);
    } else {
      let title = filterTitlesArray.indexOf(event.target.name);
      filterTitlesArray.splice(title, title);
    }
  };

  const applyTitleFilters = () => {
    applyTitlesFilter(filterTitlesArray);
    setFilterTitleOpen(false);
  };

  return (
    <div>
      <FilterDatesForm
        filterDateOpen={filterDateOpen}
        setFilterDateOpen={setFilterDateOpen}
        uniqueDates={uniqueDates}
        changeDateFilters={changeDateFilters}
        applyDateFilters={applyDateFilters}
      />
      <FilterTitlesForm
        filterTitleOpen={filterTitleOpen}
        setFilterTitleOpen={setFilterTitleOpen}
        uniqueTitles={uniqueTitles}
        changeTitleFilters={changeTitleFilters}
        applyTitleFilters={applyTitleFilters}
      />
    </div>
  );
};

export default FiltersContainer;
