import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import BookingPage from "./pages/booking/BookingPage";
import ConfirmationPage from "./pages/confirmation/ConfirmationPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
