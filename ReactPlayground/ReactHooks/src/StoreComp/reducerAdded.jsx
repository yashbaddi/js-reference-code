import { createContext, useReducer } from "react";

export const myContext = createContext();
const initValue = 0;

function reducerFunction(currentState, action) {
  //Reducer function takes in current State and action
  //The action conventionally given type and payload
  //Type says about the type of action that needs to be performed
  //payload has other information
  console.log("action", action);
  return action;
}

export function ContextComp({ children }) {
  const [val, dispatch] = useReducer(reducerFunction, initValue);

  return (
    <myContext.Provider value={[val, dispatch]}>{children}</myContext.Provider>
  );
}
