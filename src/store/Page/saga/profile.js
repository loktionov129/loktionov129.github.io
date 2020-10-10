import {call, delay, put, takeEvery} from '@redux-saga/core/effects';
import {PAGE_LOAD_PROFILE, PAGE_LOADED_ERROR, PAGE_LOADED_SUCCESS} from '../actionTypes';

function loadProfile(lang) {
  return fetch(`/assets/data/${lang}.json`)
    .then(response => response.json());
}

function* pageLoadProfileSagaWorker() {
  try {
    const ru = yield call(loadProfile, 'ru');
    const en = yield call(loadProfile, 'en');
    yield delay(1000);
    yield put({type: PAGE_LOADED_SUCCESS, data: {ru, en}});
  } catch (e) {
    console.warn(e);
    yield put({type: PAGE_LOADED_ERROR});
  }
}

export default function* pageLoadProfileSagaWatcher() {
  yield takeEvery(PAGE_LOAD_PROFILE, pageLoadProfileSagaWorker)
}
