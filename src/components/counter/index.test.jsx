import React from 'react';
import Counter from '.';
import { INCREMENT } from '../../actions';

it('matches snapshot', () => {
  expect(mountWithStore(<Counter />)).toMatchSnapshot();
});

it('clicking button calls increment', () => {
  const component = mountWithStore(<Counter />);
  const spy = jest.spyOn(component.instance().store, 'dispatch');
  component.update();
  component.find('button').simulate('click');
  expect(spy).toHaveBeenCalledWith({ type: INCREMENT });
});

it('shows current current count', () => {
  const component = mountWithStore(<Counter />, { count: 1 });
  expect(component).toMatchSnapshot();
});
