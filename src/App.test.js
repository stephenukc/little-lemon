import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { fetchAPI } from "./api/api";
import BookingForm from "./pages/booking/BookingForm/BookingForm";
import { initializeTimes, updateTimes } from "./pages/booking/BookingPage";

jest.mock("./api/api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("initializeTimes", () => {
  test("should return a non-empty array of booking times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValueOnce(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("should return updated times from fetchAPI when given a valid date", () => {
    const initialState = [];
    const mockDate = "2025-05-01";
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValueOnce(mockTimes);

    const action = { type: "update_times", date: mockDate };
    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
    expect(result).toEqual(mockTimes);
  });

  test("should return existing state for unsupported action types", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "invalid_action", date: "2025-05-01" };

    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});

const setup = (overrides = {}) => {
  const defaultFormData = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };

  const dispatch = jest.fn();
  const timesDispatch = jest.fn();
  const onSubmit = jest.fn();

  render(
    <BookingForm
      formData={{ ...defaultFormData, ...overrides.formData }}
      availableTimes={overrides.availableTimes || ["17:00", "18:00"]}
      dispatch={dispatch}
      timesDispatch={timesDispatch}
      onSubmit={onSubmit}
    />
  );

  return { dispatch, timesDispatch, onSubmit };
};

describe("BookingForm - HTML5 validation", () => {
  test("date input should have required and min attributes", () => {
    setup();
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("min");
  });

  test("time select should have required attribute", () => {
    setup();
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input should have required, min and max attributes", () => {
    setup();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select should have required attribute", () => {
    setup();
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("BookingForm - React validation", () => {
  test("form submit button should be disabled with invalid form data", () => {
    setup();
    const submitButton = screen.getByRole("button", { name: /continue/i });
    expect(submitButton).toBeDisabled();
  });

  test("form submit button should be enabled with valid data", () => {
    const today = new Date().toISOString().split("T")[0];
    setup({
      formData: {
        date: today,
        time: "17:00",
        guests: "2",
        occasion: "BIRTHDAY",
      },
    });

    const submitButton = screen.getByRole("button", { name: /continue/i });
    expect(submitButton).toBeEnabled();
  });

  test("shows error message for invalid guest count (0)", async () => {
    setup({
      formData: {
        date: new Date().toISOString().split("T")[0],
        time: "17:00",
        guests: "",
        occasion: "BIRTHDAY",
      },
    });

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "0");

    expect(
      await screen.findByText(/guests must be between 1 and 10/i)
    ).toBeInTheDocument();
  });

  test("shows error message for past date", async () => {
    const pastDate = new Date(Date.now() - 86400000)
      .toISOString()
      .split("T")[0];

    setup({
      formData: {
        date: "",
        time: "17:00",
        guests: "2",
        occasion: "BIRTHDAY",
      },
    });

    const dateInput = screen.getByLabelText(/date/i);
    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, pastDate);

    expect(
      await screen.findByText(/date cannot be in the past/i)
    ).toBeInTheDocument();
  });
});
