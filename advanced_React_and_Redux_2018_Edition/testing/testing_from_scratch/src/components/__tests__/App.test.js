import React from 'react';
import ReactDOM from 'react-dom';

import App from './../App';

it('shows a comment box', () => {
  // document 由 JSDOM 產生，模擬 browser
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there
  //   console.log(div.innerHTML);
  expect(div.innerHTML).toContain('Comment Box');

  // cleanup after our test run
  // remove div from document
  ReactDOM.unmountComponentAtNode(div);
});
