import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";
import BookingForm from "./BookingForm/BookingForm";
import { submitAPI, fetchAPI } from "../../api/api";
import "./booking-page.css";

const initialFormState = () => {
  const today = new Date();
  return {
    formData: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    submittedData: JSON.parse(localStorage.getItem("submittedData")) || null,
    availableTimes: fetchAPI(today),
  };
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: fetchAPI(new Date(action.date)),
      };
    case "RESET_FORM":
      return {
        ...state,
        formData: {
          date: "",
          time: "",
          guests: "",
          occasion: "",
        },
        submittedData: null,
      };
    case "SUBMIT_SUCCESS":
      localStorage.setItem("submittedData", JSON.stringify(action.payload));
      return {
        ...state,
        submittedData: action.payload,
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(bookingReducer, {}, initialFormState);

  const handleSubmit = async () => {
    const isSuccess = await submitAPI(state.formData);
    if (isSuccess) {
      dispatch({ type: "SUBMIT_SUCCESS", payload: state.formData });
      navigate("/confirmation");
    }
  };

  return (
    <MainLayout>
      <div className="lemon__booking-forms">
        <BookingForm
          formData={state.formData}
          availableTimes={state.availableTimes}
          dispatch={dispatch}
          onSubmit={handleSubmit}
        />
      </div>
    </MainLayout>
  );
};

export default BookingPage;
