import React from 'react';
import { Consumer } from '../../common/store';
import { btn } from './counter.css';
import { increment } from '../../actions';

const Counter = () => (
  <Consumer>
    {({ state: { count }, dispatch }) => (
      <div>
        <button className={btn} type="button" onClick={() => dispatch(increment())}>
          Increase count
          {count}
        </button>
      </div>
    )}
  </Consumer>
);

export default Counter;
