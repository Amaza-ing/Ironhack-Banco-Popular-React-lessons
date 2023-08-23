import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    console.log("decrease Count called");

    setCount(count - 1);
  };

  const increaseCount = () => {
    console.log("increase count called");

    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;
