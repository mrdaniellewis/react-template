import { count } from '.';
import { INCREMENT } from '../actions';

describe('count', () => {
  it('has a default count of 0', () => {
    expect(count(undefined, {})).toEqual(0);
  });

  it('increments the count by 1', () => {
    expect(count(0, { type: INCREMENT })).toEqual(1);
  });
});
