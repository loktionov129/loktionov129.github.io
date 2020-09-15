import {combineReducers} from 'redux';

import aSideReducer from './Aside/aSideReducer';
import pageReducer from './Page/pageReducer';

export default combineReducers({
  aSide: aSideReducer,
  page: pageReducer
});
