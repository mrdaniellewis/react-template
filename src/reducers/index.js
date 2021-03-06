import { combineReducers } from 'redux';
import { INCREMENT } from '../actions';

export function count(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

export default combineReducers({ count });
