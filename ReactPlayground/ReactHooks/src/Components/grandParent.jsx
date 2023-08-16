import { Parent } from "./parent";
import { Parent2 } from "./parent2";

export function GrandParent() {
  return (
    <div>
      <span>This is Grand Parent</span>
      <Parent />
      <Parent2 />
    </div>
  );
}
