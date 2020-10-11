import {PAGE_LOADED_SUCCESS} from './actionTypes';

const initialState = {
  data: null
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_LOADED_SUCCESS:
      return {
        data: action.data
      };

    default: return state
  }
}
