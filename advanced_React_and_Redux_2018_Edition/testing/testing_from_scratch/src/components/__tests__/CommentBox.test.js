import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

// cleanup DOM
afterEach(() => {
  wrapped.unmount();
});

// Full DOM API
it('has a text area and a button', () => {
  //   console.log('### check textarea:', wrapped.find('textarea'));
  //   console.log('### check button:', wrapped.find('button'));

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
