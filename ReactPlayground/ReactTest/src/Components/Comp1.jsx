import { useState } from "react";

export function Comp1() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log("count before", count);
    setCount(count + 1);
    console.log("count after", count);
  }
  return (
    <>
      <button onClick={incrCount}>Increment {count}</button>
    </>
  );
}
