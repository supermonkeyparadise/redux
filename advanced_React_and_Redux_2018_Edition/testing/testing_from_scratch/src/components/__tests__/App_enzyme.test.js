import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';
import CommentBox from './../CommentBox';
import CommentList from './../CommentList'

it('shows a comment box(enzyme version)', () => {
  const wrapped = shallow(<App />);

  // 確認 App 裡，是否包含一個 CommentBox 元件
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List(enzyme version)', () => {
    const wrapped = shallow(<App />);

    // 確認 App 裡，是否包含一個 CommentList 元件
    expect(wrapped.find(CommentList).length).toEqual(1);
});