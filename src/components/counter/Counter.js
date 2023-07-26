import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter-container">
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter">{count}</p>
      <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </div>
  );
};

export default Counter;
