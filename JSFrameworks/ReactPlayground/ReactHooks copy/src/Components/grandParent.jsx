import { Parent } from "./parent";
import { Parent2 } from "./parent2";

export function GrandParent() {
  console.log("Grand Parent is rendered");

  return (
    <div className="border rounded bg-green-500 w-96 relative top-1/2 left-1/3">
      <span>This is Grand Parent</span>
      <Parent />
      <Parent2 />
    </div>
  );
}
