import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PrimaryButton from "./SaveButton";

const title = "Title";
const buttonFunction = jest.fn();
const newText = "Text of note";

describe("save button", () => {
  it("renders button", () => {
    render(<PrimaryButton title={title} buttonFunction={buttonFunction} newText={newText} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
  it("button works", () => {
    render(<PrimaryButton title={title} buttonFunction={buttonFunction} newText={newText} />);
    userEvent.click(screen.getByRole("button"));
    expect(buttonFunction).toHaveBeenCalled();
  });
});
