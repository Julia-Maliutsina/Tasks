import PropTypes from "prop-types";

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
  const changeFilterDateOpen = () => {
    setFilterDateOpen(!filterDateOpen);
  };
  const changeFilterTitleOpen = () => {
    setFilterTitleOpen(!filterTitleOpen);
  };
  return (
    <div>
      <FilterDatesForm
        filterDateOpen={filterDateOpen}
        setFilterDateOpen={setFilterDateOpen}
        uniqueDates={uniqueDates}
        changeDateFilters={changeDateFilters}
        applyDateFilters={applyDateFilters}
        changeFilterDateOpen={changeFilterDateOpen}
      />
      <FilterTitlesForm
        filterTitleOpen={filterTitleOpen}
        setFilterTitleOpen={setFilterTitleOpen}
        uniqueTitles={uniqueTitles}
        changeTitleFilters={changeTitleFilters}
        applyTitleFilters={applyTitleFilters}
        changeFilterTitleOpen={changeFilterTitleOpen}
      />
    </div>
  );
};
FiltersContainer.propTypes = {
  uniqueDates: PropTypes.array,
  uniqueTitles: PropTypes.array,
  applyDatesFilter: PropTypes.func,
  applyTitlesFilter: PropTypes.func,
  filterDateOpen: PropTypes.bool,
  filterTitleOpen: PropTypes.bool,
  setFilterDateOpen: PropTypes.func,
  setFilterTitleOpen: PropTypes.func,
  filterDatesArray: PropTypes.array,
  filterTitlesArray: PropTypes.array,
  setDateFilters: PropTypes.func,
  setTitleFilters: PropTypes.func,
};
export default FiltersContainer;
