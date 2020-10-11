import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import aSideReducer from './Aside/aSideReducer';
import pageReducer from './Page/pageReducer';

const combinedReducers = combineReducers({
  aSide: aSideReducer,
  page: pageReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combinedReducers(state, action);
};
