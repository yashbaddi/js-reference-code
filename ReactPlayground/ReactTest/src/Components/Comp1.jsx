import { useState } from "react";

export function Comp1() {
  const [count, setCount] = useState(0);
  console.log("This is outside comp 1");
  function incrCount() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log("count before", count);
    setCount(count + 1);
    console.log("count after", count);
  }
  return (
    <div className="bg-orange-700 text-orange-50 hover:bg-orange-900 w-56 p-2 m-2 rounded-xl shadow-xl">
      <button onClick={incrCount}>Increment {count}</button>
    </div>
  );
}
