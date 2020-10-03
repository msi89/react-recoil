import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counter-state",
  default: 0
});

export const counterDoubleState = selector({
  key: "counter-double-state",
  get: ({ get }) => {
    const counter = get(counterState);

    return counter * 2;
  }
});
