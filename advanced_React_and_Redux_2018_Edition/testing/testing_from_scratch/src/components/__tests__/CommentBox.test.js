import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// cleanup DOM
afterEach(() => {
  wrapped.unmount();
});

// Full DOM API
it('has a text area and two buttons', () => {
  //   console.log('### check textarea:', wrapped.find('textarea'));
  //  console.log('### check button:', wrapped.find('button'));

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    // step 1: 模擬事件
    wrapped.find('textarea').simulate('change', {
      // 觸發事件後的 event
      target: { value: 'new comment' }
    });

    // step 2: 更新元件
    // forcing component update
    wrapped.update();
  });

  // 模擬 textarea change 事件
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptyied', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    // step 2: 模擬 form submit
    wrapped.find('textarea').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
