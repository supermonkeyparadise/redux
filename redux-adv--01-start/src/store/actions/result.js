import * as actionTypes from './actionTypes';

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  // redux-thunk 可以讓我們操控 dispatch
  // 回傳 function 而不是 javascript obj，redux-thunk 把 dispatch func 作為參數，傳遞給 return 的 func
  return dispatch => {
    // 模擬 ajax
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = resElId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};
