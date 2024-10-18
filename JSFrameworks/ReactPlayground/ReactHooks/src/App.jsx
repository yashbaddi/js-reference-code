import { useReducerContext } from "./StoreComp/reducerAdded.jsx";

import "./App.css";
import { GreatGrandParent } from "./Components/greatGrandParent.jsx";

function App() {
  return (
    <useReducerContext>
      <GreatGrandParent />
    </useReducerContext>
  );
}

export default App;
