import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../store/atoms";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  function increment() {
    setCounter((c) => c + 1);
  }
  function decrement() {
    setCounter((c) => c - 1);
  }

  return (
    <div>
      <h1>set counter </h1>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 10px" }}>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
