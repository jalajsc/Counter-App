import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const addVal = () => {
    if (count + step <= 100) setCount((count) => count + step);
  };
  const subVal = () => {
    if (count - step >= 0) setCount((count) => count - step);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={addVal}>Increase</button>
      <input
        type="text"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={subVal}>Decrease</button>
    </>
  );
}

export default App;
