import React, { useReducer } from "react";
import { useNavigate } from "react-router";
import { fetchAPI, submitAPI } from "../../api/api";
import MainLayout from "../../components/Layout/MainLayout";
import "./booking-page.css";
import BookingForm from "./BookingForm/BookingForm";

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

const BookingPage = () => {
  const navigate = useNavigate();

  const [availableTimes, timesDispatch] = useReducer(
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

  const handleSubmit = async () => {
    const isSuccess = await submitAPI(formData);
    if (isSuccess) {
      localStorage.setItem("submittedData", JSON.stringify(formData));
      navigate("/confirmation");
    }
  };

  return (
    <MainLayout>
      <div className="lemon__booking-forms">
        <BookingForm
          formData={formData}
          availableTimes={availableTimes}
          dispatch={formDispatch}
          onSubmit={handleSubmit}
          timesDispatch={timesDispatch}
        />
      </div>
    </MainLayout>
  );
};

export default BookingPage;
