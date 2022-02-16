import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utilities";

const initialState = {
  results: [],
  storedID: 0,
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
  // const updatedArray = [...state.results]
  // const index = updatedArray.findIndex (result => result.id === action.resultElId)
  // updatedArray.splice (index, 1)
  // return {
  //     ...state,
  //     results: updatedArray
  // }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const updatedID = state.storedID + 1;
      return updateObject(state, {
        results: state.results.concat({
          id: state.storedID,
          value: action.result,
        }),
        storedID: updatedID,
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
