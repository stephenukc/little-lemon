import { useEffect, useState } from "react";
import "./App.css";
import { Loader } from "./components";
import Home from "./Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div id="home">
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
