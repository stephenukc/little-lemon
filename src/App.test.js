import {
  initializeTimes,
  updateTimes,
} from "./containers/BookingPage/BookingContext";

describe("initializeTimes", () => {
  test("should return the correct initial available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  test("should return the same state that is provided", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "update_times", date: "2025-05-01" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
