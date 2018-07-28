import { INCREMENT, increment } from '.';

describe('increment', () => {
  it('returns the correct action', () => {
    expect(increment()).toEqual({ type: INCREMENT });
  });
});
