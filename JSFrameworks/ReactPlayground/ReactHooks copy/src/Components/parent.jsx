import { Child } from "./child";
import { Child2 } from "./child2";
import { Child3 } from "./child3";

export function Parent() {
  console.log("Parent 1 rendered");

  return (
    <div className="border rounded bg-slate-900 text-slate-50 w-80 m-2 p-2 flex flex-col justify-center items-center">
      <span>This is Parent</span>
      <Child />
      <Child2 />
      <Child3 />
    </div>
  );
}
