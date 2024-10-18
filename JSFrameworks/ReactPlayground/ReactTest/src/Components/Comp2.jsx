/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
let renderTimes = 0;
export function Comp2() {
  //Simple UseEffect
  const [count, setCount] = useState(0);
  const [countx, setCountx] = useState(0);
  const [county, setCounty] = useState(0);
  const [countz, setCountz] = useState(0);

  console.log("This is outside in comp 2");
  console.log(count);
  console.log("first renderTimes:", renderTimes);

  useEffect(() => {
    console.log("This is inside useEffect with no dependedency array ");
    // setRenderedTimes((renderedTimes) => renderedTimes + 1);
    // setCount(count + 1);
    console.log(count);
    renderTimes++;
    console.log("renderTimes", renderTimes);
    return () => {
      console.log("This is inside clean up in no dep");
    };
  });

  useEffect(() => {
    console.log("renderTimes:[]", renderTimes);
    console.log("This is inside useEffect with empty dependedency array ");
    return () => {
      console.log("This is inside clean up in empty dep");
    };
  }, []);

  useEffect(() => {
    console.log(
      "This is inside useEffect with dependedency array of just count with count as ",
      count
    );
    return () => {
      console.log("This is inside clean up in count dep");
    };
  }, [count]);

  useEffect(() => {
    console.log(
      "This is inside useEffect with dependedency array of just count with count as ",
      countx
    );
    return () => {
      console.log("This is inside clean up in countx dep");
    };
  }, [countx]);

  useEffect(() => {
    console.log(
      "This is inside useEffect with dependedency array of just count with count as ",
      county
    );
    return () => {
      console.log("This is inside clean up in county dep");
    };
  }, [county]);

  useEffect(() => {
    console.log(
      "This is inside useEffect with dependedency array of just count with count as ",
      countz
    );
    return () => {
      console.log("This is inside clean up in countz dep");
    };
  }, [countz]);

  function incrCount() {
    console.log(count);
    setCount((count) => count + 1);
    setCountx(countx + 1);
    console.log("Function is complete");
    // setCount(county + 1);
    // setCountz((countz) => countz + 1);
  }

  return (
    <div>
      <button
        onClick={incrCount}
        className="bg-orange-700 text-orange-50 hover:bg-orange-900 w-56 p-2 m-2 rounded-xl shadow-xl"
      >
        Count With Use Effect {count}
      </button>
      <button className="bg-orange-700 text-orange-50 hover:bg-orange-900 w-56 p-2 m-2 rounded-xl shadow-xl">
        renderTimes {renderTimes}
        <br />
        Count x {countx}
        <br />
        Count y {county}
        <br />
        Count z {countz}
        {console.log("Inside JSX renderTimes:", renderTimes)}
      </button>
    </div>
  );
}
