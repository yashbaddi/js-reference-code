import { useContext } from "react";
import { GrandParent } from "./grandParent";
import { myContext } from "../Store/context";

export function GreatGrandParent() {
  const [data, setData] = useContext(myContext);
  setData(2);
  return (
    <div>
      <span>
        This is a great grand Parent
        <br />
      </span>
      <span>The Value is {data}</span>
      <GrandParent />
    </div>
  );
}
