import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
  it("renders an accessible input", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("accept entered text", () => {
    render(<Input />);
    const selectedInput = screen.getByRole("textbox");
    fireEvent.change(selectedInput, {
      target: { value: "Hello there!" }
    });
    expect(selectedInput.value).toBe("Hello there!");
  });
});
