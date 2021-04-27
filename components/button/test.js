import { screen, render } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("renders an accessible button with correct label", () => {
    render(<Button>Hello there!</Button>);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByText("Hello there!")).toBeTruthy();
  });
});
