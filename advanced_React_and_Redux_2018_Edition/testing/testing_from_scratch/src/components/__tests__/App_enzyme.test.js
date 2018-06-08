import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';
import CommentBox from './../CommentBox';

it('shows a comment box(enzyme version)', () => {
  const wrapped = shallow(<App />);

  // 確認 App 裡，是否包含一個 CommentBox 元件
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
