import { Child } from "./child";
import { Child2 } from "./child2";
import { Child3 } from "./child3";

export function Parent() {
  return (
    <div className="parent parent1">
      <span>This is Parent</span>
      <Child />
      <Child2 />
      <Child3 />
    </div>
  );
}
