import { applyMiddleware, compose, createStore } from 'redux';
import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import thunk from 'redux-thunk';

import app from '../reducers';

export const { Provider, Consumer } = createContext();

export class Store extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    initialState: null,
  };

  constructor(props) {
    super(props);
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    this.store = createStore(
      app,
      this.props.initialState || undefined,
      composeEnhancers(applyMiddleware(thunk)),
    );
    this.dispatch = action => this.store.dispatch(action);
    this.state = this.store.getState();

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducers = require('../reducers'); // eslint-disable-line global-require
        this.store.replaceReducer(nextReducers.default);
      });
    }
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.setState(this.store.getState()));
  }

  componentWillUnmount() {
    this.subscriber();
  }

  render() {
    const { props: { children }, state, dispatch } = this;
    return (
      <Provider
        value={{ state, dispatch }}
      >
        {children}
      </Provider>
    );
  }
}
