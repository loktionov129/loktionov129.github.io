import { createSelector } from 'reselect'
import {getLang} from '../Aside/selectors';

export const getIsLoading = state => state.page.isLoading;
export const getHasError = state => state.page.hasError;

const getData = state => state.page.data;
export const getProfile = createSelector(
    getLang,
    getData,
    (lang, data) => data[lang]
)