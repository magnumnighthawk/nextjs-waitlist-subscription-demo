import { render, screen } from "@testing-library/react";
import Homepage from "pages/index";

describe("Homepage", () => {
  it("renders message with no seats available", () => {
    render(<Homepage />);
    expect(
      screen.getByText("Sorry there are no tickets available right now!")
    ).toBeTruthy();
  });

  it("link to the waitlist page", () => {
    render(<Homepage />);
    expect(
      screen.getByRole("link", { name: "Join the waitlist" })
    ).toHaveAttribute("href", "/waitlist");
  });
});
