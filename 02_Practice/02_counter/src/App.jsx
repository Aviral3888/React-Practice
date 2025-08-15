import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    // Updates the counter by 1
    // setCounter(counter + 1);

    // These will have no effect - due to BATCHING in React
    /*
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    */
    
    // Can be done by using callback in setCounter method
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  };
  const substractValue = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("Counter is initialized: ", counter);
  }, []);

  useEffect(() => {
    console.log("Counter is updated: ", counter);
  }, [counter]);

  return (
    <>
      <h2>React Course - Counter Application</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={substractValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
