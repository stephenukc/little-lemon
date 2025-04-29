/* global fetchAPI */
import React, { createContext, useReducer } from "react";

export const BookingContext = createContext();

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "update_times") {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
  }
  return state;
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return {
        date: "",
        time: "",
        guests: "",
        occasion: "",
      };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [formData, formDispatch] = useReducer(formReducer, {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  return (
    <BookingContext.Provider
      value={{ availableTimes, dispatch, formData, formDispatch }}
    >
      {children}
    </BookingContext.Provider>
  );
};
