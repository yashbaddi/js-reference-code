import { Comp1 } from "./Comp1";
import { Comp2 } from "./comp2";
import { CodeMirrorComp } from "./CodeMirror";
import { useState } from "react";

export function Maincomp() {
  const [visible, setVisiblity] = useState(true);
  function hideComp() {
    setVisiblity(false);
  }
  return (
    <div>
      <button
        onClick={hideComp}
        className="bg-gray-700 text-gray-50 hover:bg-gray-900 w-56 p-2 m-2 rounded-xl shadow-xl"
      >
        Hide Component
      </button>
      {visible && <Comp2 />}
    </div>
  );
}
