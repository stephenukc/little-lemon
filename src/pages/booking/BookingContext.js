/* global fetchAPI */
/* global submitAPI */
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
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "RESET_FORM":
      return {
        formData: {
          date: "",
          time: "",
          guests: "",
          occasion: "",
        },
        submittedData: null,
      };
    case "SUBMIT_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        submittedData: action.payload,
      };
    default:
      return state;
  }
};

export const BookingProvider = ({ children, navigate }) => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const initialFormState = {
    formData: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    submittedData: null,
  };

  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  const submitForm = async () => {
    const isSuccess = await submitAPI(formState.formData);
    if (isSuccess) {
      formDispatch({ type: "SUBMIT_SUCCESS", payload: formState.formData });
      if (navigate) navigate("/confirmation");
    }
  };

  return (
    <BookingContext.Provider
      value={{
        availableTimes,
        dispatch,
        formData: formState.formData,
        submittedData: formState.submittedData,
        formDispatch,
        submitForm,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
