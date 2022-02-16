import * as actionTypes from "./actionTypes";

const saveResult = (ctr) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: ctr,
  };
};

export const storeResult = (ctr) => {
  return (dispatch) => {
    dispatch(saveResult(ctr));
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id,
  };
};
