import { Parent } from "./parent";
import { Parent2 } from "./parent2";

export function GrandParent() {
  return (
    <div className="grand-parent">
      <span>This is Grand Parent</span>
      <Parent />
      <Parent2 />
    </div>
  );
}
