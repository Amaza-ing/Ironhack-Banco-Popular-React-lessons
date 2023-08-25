import { useState, useEffect } from "react";

function TimerTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    const timerId = setInterval(() => {
      setCount((contPreviousValue) => contPreviousValue + 1);
    }, 1000);

    return () => {
      console.log("Component Unmonunted");
      clearInterval(timerId);
    };
  }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log("Component Unmonunted");
  //   };
  // }, []);

  useEffect(() => {
    console.log("Count variable updated");

    document.title = "Counter " + count
  }, [count])

  return (
    <div className="Timer">
      <h2>TimerTwo</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;
