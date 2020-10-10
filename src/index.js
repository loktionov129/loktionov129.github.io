import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/rootReducer';
import aSideThemeSagaWatcher from './store/Aside/saga/theme';
import pageLoadProfileSagaWatcher from './store/Page/saga/profile';

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV !== 'production' && typeof window === 'object'
const composeSetup = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose
const store = createStore(
  rootReducer,
  composeSetup(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(aSideThemeSagaWatcher);
sagaMiddleware.run(pageLoadProfileSagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();