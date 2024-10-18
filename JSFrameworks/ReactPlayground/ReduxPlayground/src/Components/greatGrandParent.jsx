import { GrandParent } from "./grandParent";

export function GreatGrandParent() {
  return (
    <div className="great-grand-parent">
      <span>
        This is a great grand Parent
        <br />
      </span>
      <GrandParent />
    </div>
  );
}
