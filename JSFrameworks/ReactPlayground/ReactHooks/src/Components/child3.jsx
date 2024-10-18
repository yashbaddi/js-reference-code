import { useContext } from "react";
import { myContext } from "../StoreComp/reducerAdded";

export function Child3() {
  const [data, setData] = useContext(myContext);
  console.log("Child 3 rendered");

  return (
    <div className="border rounded bg-orange-500 w-56">
      <span>This is a child 3</span>
      <br />
      <span>The useContext Value is {data}</span>
    </div>
  );
}
