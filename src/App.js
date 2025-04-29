import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/homepage/Home";
import Loader from "./pages/homepage/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div>{isLoading ? <Loader /> : <Home />}</div>;
}

export default App;
