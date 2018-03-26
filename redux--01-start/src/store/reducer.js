import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

// SYNC
// 初始化 reducer 時，state 為預設值
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // type 1
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;

      return newState;
    // this is not merged with the old state (與 setState 不同)
    //   return {
    //     counter: state.counter + 1
    //   };
    case actionTypes.DECREMENT:
      // type 2
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      // 不能使用 push
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
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
