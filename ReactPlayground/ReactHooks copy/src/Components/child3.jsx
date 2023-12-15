import { useContext } from "react";

export function Child3() {
  console.log("Child 3 rendered");

  return (
    <div className="border rounded bg-orange-500 w-56">
      <span>This is a child 3</span>
      <br />
    </div>
  );
}
