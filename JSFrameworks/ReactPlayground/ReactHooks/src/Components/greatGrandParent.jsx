import { useContext } from "react";
import { GrandParent } from "./grandParent";
import { myContext } from "../StoreComp/reducerAdded";

export function GreatGrandParent() {
  console.log("in context", useContext(myContext));
  const [data, setData] = useContext(myContext);
  setData(2);
  console.log("Great Grand Parent rendered");

  return (
    <div className="bg-black text-white rounded-2xl p-4 m-4">
      <span>
        This is a great grand Parent
        <br />
      </span>
      <span>The Value is {data}</span>
      <GrandParent />
    </div>
  );
}
