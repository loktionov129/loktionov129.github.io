import { ASIDE_CHANGE_LANG, ASIDE_CHANGE_THEME } from './actionTypes';

const initialState = {
  theme: 'dark',
  lang: 'ru',
};

export default function aSideReducer(state = initialState, action) {
  switch (action.type) {
    case ASIDE_CHANGE_LANG:
      return {
        ...state,
        lang: action.lang,
      };

    case ASIDE_CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
}
