import {PAGE_LOAD_PROFILE, PAGE_LOADED_SUCCESS, PAGE_LOADED_ERROR} from './actionTypes';

const initialState = {
  isLoading: true,
  hasError: false,
  data: {}
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_LOAD_PROFILE:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };

    case PAGE_LOADED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case PAGE_LOADED_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    default: return state
  }
}
