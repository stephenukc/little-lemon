import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Footer, Navbar } from "../../components";
import ConfirmedBooking from "./ConfirmedBooking/ConfirmedBooking";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("submittedData");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    } else {
      navigate("/booking");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <ConfirmedBooking submittedData={submittedData} />
      <Footer />
    </>
  );
};

export default ConfirmationPage;
