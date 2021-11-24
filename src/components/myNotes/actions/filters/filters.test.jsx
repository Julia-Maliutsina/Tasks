import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FilterTitlesForm from "./FilterTitlesForm";
import FilterDatesForm from "./FilterDatesForm";

const uniqueTitles = ["Title", "Note"];
const setFilterTitleOpen = jest.fn();
const changeTitleFilters = jest.fn();
const applyTitleFilters = jest.fn();
const uniqueDates = ["23/11/2021", "24/11/2021"];
const setFilterDateOpen = jest.fn();
const changeDateFilters = jest.fn();
const applyDateFilters = jest.fn();

describe("filters container:", () => {
  it("titles filter works", () => {
    render(
      <FilterTitlesForm
        filterTitleOpen={true}
        setFilterTitleOpen={setFilterTitleOpen}
        uniqueTitles={uniqueTitles}
        changeTitleFilters={changeTitleFilters}
        applyTitleFilters={applyTitleFilters}
      />
    );
    expect(screen.getByText("Filter by titles")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("Title"));
    expect(changeTitleFilters).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("applyTitleFilters"));
    expect(applyTitleFilters).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("cancelTitleFilters"));
    expect(setFilterTitleOpen).toHaveBeenCalledWith(false);
  });
  it("dates filter works", () => {
    render(
      <FilterDatesForm
        filterDateOpen={true}
        setFilterDateOpen={setFilterDateOpen}
        uniqueDates={uniqueDates}
        changeDateFilters={changeDateFilters}
        applyDateFilters={applyDateFilters}
      />
    );
    expect(screen.getByText("Filter by dates")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("23/11/2021"));
    expect(changeDateFilters).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("applyDateFilters"));
    expect(applyDateFilters).toHaveBeenCalled();
    userEvent.click(screen.getByTestId("cancelDateFilters"));
    expect(setFilterDateOpen).toHaveBeenCalledWith(false);
  });
});
