import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (val) => {
  return {
    type: actionTypes.ADD,
    payload: { value: val },
  };
};

export const subtract = (val) => {
  return {
    type: actionTypes.SUBTRACT,
    payload: { value: val },
  };
};
