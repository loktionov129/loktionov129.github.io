import {call, delay, put, takeEvery} from '@redux-saga/core/effects';

function loadProfile(lang) {
  return fetch(`/assets/data/${lang}.json`)
    .then(response => response.json());
}

function* pageLoadProfileSagaWorker(action) {
  try {
    const data = yield call(loadProfile, action.lang);
    yield delay(0);
    yield put({type: "PAGE_LOADED_SUCCESS", data});
  } catch (e) {
    console.warn(e);
    yield put({type: "PAGE_LOADED_ERROR"});
  }
}

export default function* pageLoadProfileSagaWatcher() {
  yield takeEvery('PAGE_LOAD_PROFILE', pageLoadProfileSagaWorker)
}
