import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

const initSomething = "hello Something";
const initSomeone = "hello Someone";

function somethingReducer(currentState = initSomething, action) {
  if (action.type === "UPDATE_SOMETHING") {
    console.log("update something conolse");
    return action.payload;
  }
  return currentState;
}

function someoneReducer(currentState = initSomeone, action) {
  if (action.type === "UPDATE_SOMEONE") {
    console.log("Heyyyyyyyy");
    return action.payload;
  }
  return currentState;
}

const rootReducer = combineReducers({
  something: somethingReducer,
  someone: someoneReducer,
});

// const global = {
//   architha: "hello Something",
//   someone: "hello Someone",
// };

const myMiddleware = (store) => {
  return (next) => {
    return (action) => {
      if (typeof action == "function") {
        action().then(next);
      } else {
        next(action);
      }
    };
  };
};

// const secondMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log(action);
//       next();
//     };
//   };
// };

// const middlewareWithStore = myMiddleware(store);
// const middlewareThatCallsSecondMiddleware =
//   middlewareWithStore(secondMiddleware);

// const updateSomethingMiddleware = middlewareThatCallsSecondMiddleware({
//   type: "UPDATE_SOMETHING",
//   payload: "helloooo Something",
// });

// const updateSomeoneMiddleware = middlewareThatCallsSecondMiddleware({
//   type: "UPDATE_SOMEONE",
//   payload: "helloooo Someone",
// });
export const store = createStore(rootReducer, applyMiddleware(myMiddleware));

// function once(fn) {
//   let isExec = false;
//   return () => {
//     if (!isExec) {
//       fn();
//       isExec = true;
//     }
//   };
// }
