import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  it("renders an accessible footer with link to icon credits", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Flat Icons" })).toBeTruthy();
  });
});
