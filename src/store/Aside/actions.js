import { ASIDE_CHANGE_LANG, ASIDE_CHANGE_THEME } from './actionTypes';

export const changeLang = (lang) => ({
  type: ASIDE_CHANGE_LANG,
  lang,
});

export const changeTheme = (theme) => ({
  type: ASIDE_CHANGE_THEME,
  theme,
});
