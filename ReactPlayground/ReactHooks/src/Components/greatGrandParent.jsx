import { GrandParent } from "./grandParent";

export function GreatGrandParent() {
  return (
    <div>
      <span>This is a great grand Parent</span>
      <GrandParent />
    </div>
  );
}
