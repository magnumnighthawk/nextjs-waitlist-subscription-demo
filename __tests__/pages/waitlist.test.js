import { render, screen, fireEvent } from "@testing-library/react";
import Waitlist from "pages/waitlist";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true })
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Waitlist", () => {
  it("renders form fields to get email and phone number", () => {
    render(<Waitlist />);

    expect(screen.getByRole("textbox", { name: "Email:" })).toBeTruthy();
    expect(screen.getByRole("textbox", { name: "Phone:" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Submit" })).toBeTruthy();
  });

  it("shows success message when the right details have been filled", async () => {
    render(<Waitlist />);

    fireEvent.change(screen.getByRole("textbox", { name: "Email:" }), {
      target: { value: "test@abc.com" }
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Phone:" }), {
      target: { value: "7404238349" }
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(
      await screen.findByRole("img", { name: "Added successfully" })
    ).toBeTruthy();
  });

  it("shows error when the required fields are missing", async () => {
    render(<Waitlist />);

    fetch.mockResolvedValueOnce({
      json: async () => ({ error: true, message: "Phone number is missing!" })
    });

    fireEvent.change(screen.getByRole("textbox", { name: "Email:" }), {
      target: { value: "test@abc.com" }
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Phone number is missing!"
    );
  });
});
