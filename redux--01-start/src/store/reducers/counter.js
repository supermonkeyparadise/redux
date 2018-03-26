import * as actionTypes from './../actions';

const initialState = {
  counter: 0
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
    default:
      return state;
  }
};

export default reducer;
