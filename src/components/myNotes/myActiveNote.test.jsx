import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyActiveNote from "./MyActiveNote";
import INIT from "config/constants/initial";

const onValueChange = jest.fn();
const saveChangedNote = jest.fn();
const handleAlertClose = jest.fn();
const ACTIVE = {
  title: "title",
  description: "description",
  createdAt: "2011-10-05T14:48:00.000Z",
};
const DATE = "2011-10-05";

describe("renders field with active note", () => {
  it("renders without chosen note", () => {
    render(
      <MyActiveNote
        active={INIT.ACTIVE}
        newText={INIT.ACTIVE.description}
        handleChange={onValueChange}
        alertOpen={false}
        saveChangedNote={saveChangedNote}
        handleAlertClose={handleAlertClose}
      />
    );
    expect(screen.getByText(INIT.ACTIVE.title)).toBeInTheDocument();
  });
  it("renders with chosen note", () => {
    render(
      <MyActiveNote
        active={ACTIVE}
        newText={ACTIVE.description}
        handleChange={onValueChange}
        alertOpen={false}
        saveChangedNote={saveChangedNote}
        handleAlertClose={handleAlertClose}
      />
    );
    expect(screen.getByText(ACTIVE.title)).toBeInTheDocument();
    expect(screen.getByText(ACTIVE.description)).toBeInTheDocument();
    expect(screen.getByText(DATE)).toBeInTheDocument();
  });
  it("on text change function is called", () => {
    render(
      <MyActiveNote
        active={INIT.ACTIVE}
        newText={INIT.ACTIVE.description}
        handleChange={onValueChange}
        alertOpen={false}
        saveChangedNote={saveChangedNote}
        handleAlertClose={handleAlertClose}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "test");
    expect(onValueChange).toHaveBeenCalledTimes(4);
  });
  it("on save function is called", () => {
    render(
      <MyActiveNote
        active={INIT.ACTIVE}
        newText={INIT.ACTIVE.description}
        handleChange={onValueChange}
        alertOpen={false}
        saveChangedNote={saveChangedNote}
        handleAlertClose={handleAlertClose}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(saveChangedNote).toHaveBeenCalled();
  });
});
