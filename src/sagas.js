import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as api from './api';

export default function* rootSaga() {
   yield takeLatest('FETCH_TASKS_STARTED', fetchTasks);
   yield takeLatest('CREATE_TASK_STARTED', createTask);
   yield takeEvery('EDIT_TASK_STARTED', editTask);
}

function* fetchTasks() {
   try {
      const { data } = yield call(api.fetchTasks);
      yield put({
         type: 'FETCH_TASKS_SUCCEEDED',
         payload: { tasks: data },
      });
   } catch (e) {
      yield put({
         type: 'FETCH_TASKS_FAILED',
         payload: { error: e.message },
      });
   }
}

function* createTask({ payload }) {
   try {
      const { data } = yield call(
         api.createTask, payload
      );
      yield put({
         type: 'CREATE_TASK_SUCCEEDED',
         payload: { task: data  },
      });
   } catch (e) {
      yield put({
         type: 'CREATE_TASK_FAILED',
         payload: { error: e.message },
      });
   }
}

function* editTask({ payload }) {
   try {
      const { data } = yield call(
         api.editTask, payload.id, payload.params
      );
      yield put({
         type: 'EDIT_TASK_SUCCEEDED',
         payload: { task: data },
      });
   } catch (e) {
      yield put({
         type: 'EDIT_TASK_FAILED',
         payload: { error: e.message },
      });
   }
}
