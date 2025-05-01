import { fetchAPI } from "./api/api";
import { initializeTimes, updateTimes } from "./pages/booking/BookingPage";

// Step 1: Mock fetchAPI for both tests
jest.mock("./api/api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("initializeTimes", () => {
  test("should return a non-empty array of booking times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValueOnce(mockTimes); // Mock fetchAPI call

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date)); // Should be called with today's date
    expect(result).toEqual(mockTimes); // Should return mocked array
  });
});

describe("updateTimes", () => {
  test("should return updated times from fetchAPI when given a valid date", () => {
    const initialState = [];
    const mockDate = "2025-05-01";
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValueOnce(mockTimes); // Mock fetchAPI call

    const action = { type: "update_times", date: mockDate };
    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate)); // Correct date passed
    expect(result).toEqual(mockTimes); // Should return mocked times
  });

  test("should return existing state for unsupported action types", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "invalid_action", date: "2025-05-01" };

    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState); // No change
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
