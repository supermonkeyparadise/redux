import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';

// HOC
export default props => {
  return (
      // second argument will be our initial state for the redux store
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
