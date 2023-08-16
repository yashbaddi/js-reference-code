import { useState } from "react";
import { myContext } from "./Store/context.js";

import "./App.css";
import { GreatGrandParent } from "./Components/greatGrandParent";

function App() {
  return (
    <myContext.Provider value={5}>
      <GreatGrandParent />
    </myContext.Provider>
  );
}

export default App;
