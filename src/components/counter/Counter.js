import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = (prevCount) => {
    setCount(prevCount++);
  };

  const decrementCounter = (prevCount) => {
    setCount(prevCount--);
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
