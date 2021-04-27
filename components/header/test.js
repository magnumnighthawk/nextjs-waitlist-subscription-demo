import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("renders an accessible banner with logo", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByText("Site Logo")).toBeTruthy();
  });
});
