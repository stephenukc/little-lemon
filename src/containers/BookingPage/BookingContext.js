import React, { createContext, useReducer } from "react";

export const BookingContext = createContext();

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  return initializeTimes();
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
