import { ContextComp } from "./Store/reducerAdded.jsx";

import "./App.css";
import { GreatGrandParent } from "./Components/greatGrandParent";

function App() {
  return (
    <ContextComp>
      <GreatGrandParent />
    </ContextComp>
  );
}

export default App;
