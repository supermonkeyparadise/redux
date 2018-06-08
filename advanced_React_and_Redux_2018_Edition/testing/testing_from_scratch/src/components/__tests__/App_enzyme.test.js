import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box(enzyme version)', () => {
  // 確認 App 裡，是否包含一個 CommentBox 元件
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List(enzyme version)', () => {
  // 確認 App 裡，是否包含一個 CommentList 元件
  expect(wrapped.find(CommentList).length).toEqual(1);
});
