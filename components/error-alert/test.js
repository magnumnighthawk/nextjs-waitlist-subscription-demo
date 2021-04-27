import { screen, render } from "@testing-library/react";
import Alert from "./index";

describe("Alert", () => {
  it("renders an accessible alert label with correct message", () => {
    render(<Alert message="Hello there!" />);
    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.getByText("Hello there!")).toBeTruthy();
  });
});
