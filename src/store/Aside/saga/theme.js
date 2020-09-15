import {call, takeEvery} from '@redux-saga/core/effects';

function changeTheme(theme) {
  document.getElementById('mainhtml').classList.value = `${theme} keyboard`;
}

function* aSideThemeSagaWorker(action) {
  yield call(changeTheme, action.theme);
}

export default function* aSideThemeSagaWatcher() {
  yield takeEvery('ASIDE_CHANGE_THEME', aSideThemeSagaWorker)
}
