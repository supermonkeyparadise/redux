import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import App from 'components/App';

it('cat fetch a list of commemts and display them', () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchCommemts' button and click it

  // Expect to find a list of commemts! 500 Li's
});
