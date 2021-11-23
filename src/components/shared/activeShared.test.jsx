import { render, screen } from "@testing-library/react";
import ActiveSharedNote from "./ActiveShared";
import INIT from "config/constants/initial";

const ACTIVE = {
  title: "title",
  description: "description",
  createdAt: "2011-10-05T14:48:00.000Z",
  author: "user@mail",
};
describe("field with active shared note", () => {
  it("renders without chosen note", () => {
    render(<ActiveSharedNote sharedChosenNote={INIT.ACTIVE_SHARED} />);
    expect(screen.getByText(INIT.ACTIVE_SHARED.title)).toBeInTheDocument();
  });
  it("renders with chosen note", () => {
    render(<ActiveSharedNote sharedChosenNote={ACTIVE} />);
    expect(screen.getByText(ACTIVE.title)).toBeInTheDocument();
  });
});
