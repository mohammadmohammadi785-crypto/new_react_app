import { useState } from "react";
import "./App.css";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>React App</h1>
      <p>سلام! این یک پروژهٔ React با Vite و TypeScript است.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        شمارش: {count}
      </button>
      <Home />
    </div>
  );
}

export default App;
