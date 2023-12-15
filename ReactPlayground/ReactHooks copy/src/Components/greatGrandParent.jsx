import { GrandParent } from "./grandParent";

export function GreatGrandParent() {
  console.log("Great Grand Parent rendered");

  return (
    <div className="bg-black text-white rounded-2xl p-4 m-4">
      <span>
        This is a great grand Parent
        <br />
      </span>
      <GrandParent />
    </div>
  );
}
