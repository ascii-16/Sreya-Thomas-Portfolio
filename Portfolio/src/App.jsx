import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
