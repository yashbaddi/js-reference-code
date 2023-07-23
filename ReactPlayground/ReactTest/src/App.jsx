/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let count = 0;

  console.log(count);

  function incrCount() {
    console.log(count);
    count = count + 1;
  }
  return (
    <>
      <button onClick={incrCount}>Increment {count}</button>
    </>
  );
}

export default App;
