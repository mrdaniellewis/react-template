import React from 'react';
import { hot } from 'react-hot-loader';

import { Store } from './common/store';
import Counter from './components/counter';

const Index = () => (
  <Store>
    <div>
      Hello React!
    </div>
    <Counter />
  </Store>
);

export default hot(module)(Index);
