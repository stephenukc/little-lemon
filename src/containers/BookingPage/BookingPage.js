import React, { useState } from "react";
import { BookingForm, FinalPage, Navbar, PaymentForm, ReviewPage } from "../../components";
import "./booking-page.css";
import "./steps.css";
import { ReactComponent as Intersect } from "../../assets/intersect.svg";
import { BookingProvider } from "./BookingContext";

const Steps = ({ num, name, status, isActive }) => {
  const statusClass = status ? "completed" : "steps";
  const styles = isActive ? { opacity: "1" } : { opacity: "0" };
  return (
    <div className={statusClass}>
      <div className="steps__diamond">
        <p>{num}</p>
      </div>
      <p className="name">{name}</p>
      <Intersect className="steps__intersection" style={styles} />
    </div>
  );
};

const BookingPage = () => {
  const [currentPage, setCurrentPage] = useState("bookingForm");
  const [activeStep, setActiveStep] = useState(0);

  const renderComponent = () => {
    switch (currentPage) {
      case "bookingForm":
        return (
          <BookingForm
            onNext={() => {
              setCurrentPage("reviewPage");
              setActiveStep(1);
            }}
          />
        );
      case "reviewPage":
        return (
          <ReviewPage
            onBack={() => {
              setCurrentPage("bookingForm");
              setActiveStep(0);
            }}
            onNext={() => {
              setCurrentPage("paymentForm");
              setActiveStep(2);
            }}
          />
        );
      case "paymentForm":
        return (
          <PaymentForm
            onBack={() => {
              setCurrentPage("reviewPage");
              setActiveStep(1);
            }}
            onNext={() => {
              setCurrentPage("finalPage");
              setActiveStep(3);
            }}
          />
        );
      case "finalPage":
        return <FinalPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <BookingProvider>
        <Navbar />
        <div className="lemon__booking section__padding">
          <div className="lemon__booking-top">
            <Steps num="1" name="Reservation" status={activeStep >= 1} isActive={activeStep === 0} />
            <Steps num="2" name="Review" status={activeStep >= 2} isActive={activeStep === 1} />
            <Steps num="3" name="Payment" status={activeStep >= 3} isActive={activeStep === 2} />
          </div>
          <div className="lemon__booking-forms">{renderComponent()}</div>
        </div>
      </BookingProvider>
    </div>
  );
};

export default BookingPage;
