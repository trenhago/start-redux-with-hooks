import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as api from './api';

export default function* rootSaga() {
   yield takeLatest('FETCH_TASKS_STARTED', fetchTasks);
   yield takeLatest('CREATE_TASK_STARTED', createTasks);
}

function* fetchTasks() {
   try {
      const { data } = yield call(api.fetchTasks);
      yield delay(2000);
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

function* createTasks({ payload }) {
   try {
      const { data } = yield call(
         api.createTask, payload
      );
      console.log( data );
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