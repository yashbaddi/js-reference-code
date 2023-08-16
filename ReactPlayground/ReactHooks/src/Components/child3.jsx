import { useContext } from "react";
import { myContext } from "../Store/context";

export function Child3() {
  const [data, setData] = useContext(myContext);
  return (
    <div>
      <span>This is a child 3</span>
      <span>The useContext Value is {data}</span>
    </div>
  );
}
