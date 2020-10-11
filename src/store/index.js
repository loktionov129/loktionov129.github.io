import { applyMiddleware, compose, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import aSideThemeSagaWatcher from './Aside/saga/theme';

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV !== 'production' && typeof window === 'object';
const composeSetup = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export const initStore = () => {
  const store = createStore(
    rootReducer,
    composeSetup(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(aSideThemeSagaWatcher);

  return store;
};

export const wrapper = createWrapper(initStore);
