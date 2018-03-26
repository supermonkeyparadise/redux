import * as actionTypes from './../actions';

const initialState = {
  results: []
};

// SYNC
// 初始化 reducer 時，state 為預設值
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // 不能使用 push
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.resultElId)
      };
    default:
      return state;
  }
};

export default reducer;
