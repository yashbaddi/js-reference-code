import { Children, createContext, useState } from "react";
const defaultValue = 0;

export const myContext = createContext();

export function ContextComp({ children }) {
  const [val, setVal] = useState(0);

  return (
    <myContext.Provider value={[val, setVal]}>{children}</myContext.Provider>
  );
}
