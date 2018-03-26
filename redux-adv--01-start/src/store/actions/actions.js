export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// 利用 action creator 可以處理 ASYNC
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    val: value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    val: value
  };
};

export const saveResult = res => {
  return {
    type: STORE_RESULT,
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
    type: DELETE_RESULT,
    resultElId: resElId
  };
};
