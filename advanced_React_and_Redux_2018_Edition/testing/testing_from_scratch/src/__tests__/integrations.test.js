import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1' },
      { name: 'Fetched #2' },
      { name: 'Fetched #3' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('cat fetch a list of commemts and display them', () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchCommemts' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of commemts! 500 Li's
  expect(wrapped.find('li').length).toEqual(500);
});
