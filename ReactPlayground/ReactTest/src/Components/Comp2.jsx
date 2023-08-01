import { useState, useEffect } from "react";

export function Comp2() {
  //Simple UseEffect
  const [count, setCount] = useState(0);
  const [partialCount, setPartialCount] = useState(0);

  console.log("This is outside in comp 2");
  console.log(count);

  useEffect(() => {
    console.log("This is inside useEffect with no dependedency array ");
  });

  useEffect(() => {
    console.log("This is inside useEffect with empty dependedency array ");
  }, []);

  useEffect(() => {
    console.log(
      "This is inside useEffect with dependedency array of just count"
    );
  }, [count]);

  function incrCount() {
    console.log(count);
    setCount((count) => count + 1);
  }

  function incrPartialCount() {
    console.log(partialCount);
    setPartialCount((partCount) => partCount + 1);
  }
  return (
    <>
      <button onClick={incrCount}>Count With Use Effect {count}</button>
      <button onClick={incrPartialCount}>
        Count With Use Effect partial {partialCount}
      </button>
    </>
  );
}
