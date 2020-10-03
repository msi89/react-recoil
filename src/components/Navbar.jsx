import React from "react";
import { useRecoilValue } from "recoil";
import { counterState } from "../store/atoms";
const Navbar = () => {
  const counter = useRecoilValue(counterState);
  return <div>counter: {counter}</div>;
};

export default Navbar;
