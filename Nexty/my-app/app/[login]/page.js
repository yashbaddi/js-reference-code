"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [counter, setCounter] = useState(0);
  const paramee = useParams();
  console.log("paramee:", paramee);
  function increment() {
    setCounter((count) => count + 1);
  }
  return <div onClick={increment}>{counter}</div>;
}
