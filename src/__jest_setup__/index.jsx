import Adapter from 'enzyme-react-adapter-future';
import { createSerializer } from 'enzyme-to-json';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

import { Store } from '../common/store';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

global.mountWithStore = (component, state) => mount(
  <Store initialState={state}>
    {component}
  </Store>,
);
