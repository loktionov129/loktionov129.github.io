import { createSelector } from 'reselect';
import { getLang } from '../Aside/selectors';

const getData = (state) => state.page.data;
export const getProfile = createSelector(
  getLang,
  getData,
  (lang, data) => data[lang],
);
