import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, {
        counter: state.counter + action.payload.value,
      });
    case actionTypes.SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.payload.value,
      });
    default:
      return state;
  }
};

export default reducer;
