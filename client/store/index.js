import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const reducer = (state = {}, action) => {
  return state;
}

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));

const store = createStore(reducer, middleware);

export default store;
