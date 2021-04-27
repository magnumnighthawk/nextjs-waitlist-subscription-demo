import { render, screen } from "@testing-library/react";
import Breadcrumb from "./index";

describe("Switch", () => {
  it("renders a link to homepage", () => {
    render(<Breadcrumb />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
