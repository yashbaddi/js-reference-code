import { Child4 } from "./child4";

export function Parent2() {
  console.log("Parent 2 rendered");

  return (
    <div className="border rounded bg-red-900 text-red-50 w-80 w-80 m-2 p-2 flex flex-col justify-center items-center">
      <span>This is parent 2</span>
      <Child4 />
    </div>
  );
}
