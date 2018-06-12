import React from 'react';
import { mount } from 'enzyme';

import CommemtList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment1', 'Comment2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommemtList />
    </Root>
  );
});

// cleanup DOM
afterEach(() => {
  wrapped.unmount();
});

it('creates on LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  // return all text from componemt
  //   console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment1');
  expect(wrapped.render().text()).toContain('Comment2');
});
