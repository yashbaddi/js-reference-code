import { ContextComp } from "./Store/context.jsx";

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
