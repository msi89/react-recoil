import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Counter from "../components/Counter";
import { counterDoubleState, counterState } from "../store/atoms";

export const Home = () => {
  const setCounter = useSetRecoilState(counterState);
  const counterDouble = useRecoilValue(counterDoubleState);

  function increment() {
    setCounter((c) => c + 1);
  }

  function decrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <Counter />
      <hr />
      <button onClick={decrement}> decrement</button>
      <button onClick={increment}>increment</button>
      <h3>
        double counter: <i>{counterDouble}</i>
      </h3>
    </div>
  );
};
