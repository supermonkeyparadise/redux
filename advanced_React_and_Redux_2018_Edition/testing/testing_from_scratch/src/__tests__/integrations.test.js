import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

let wrapped;
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
  wrapped.unmount();
});

// 非同步的處理方式！！
it('can fetch a list of commemts and display them', done => {
  // Attempt to render the *entire* app
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchCommemts' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // tiny little pause[ solution 1 ]
  //   setTimeout(() => {
  //     wrapped.update();

  //     // Expect to find a list of commemts! 500 Li's
  //     expect(wrapped.find('li').length).toEqual(3);

  //     done();
  //   }, 100);

  // [ best solution ]
  moxios.wait(() => {
    wrapped.update();

    // Expect to find a list of commemts! 500 Li's
    expect(wrapped.find('li').length).toEqual(3);

    done();
  });
});
