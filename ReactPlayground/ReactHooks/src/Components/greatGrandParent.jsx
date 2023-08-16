import { useContext } from "react";
import { GrandParent } from "./grandParent";
import { myContext } from "../Store/context";

export function GreatGrandParent() {
  const data = useContext(myContext);
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
