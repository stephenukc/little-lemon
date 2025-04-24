import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState(null);

  const updateBookingData = (data) => {
    setBookingData(data);
    console.log(bookingData);
  };

  return <BookingContext.Provider value={{ bookingData, updateBookingData }}>{children}</BookingContext.Provider>;
};
