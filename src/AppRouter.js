import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
