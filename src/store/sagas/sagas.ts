import { call, put, takeEvery } from 'redux-saga/effects' 
import { counter } from '../actions/counterChangeAction';
import { asyncFunc } from '../services/async_methods';
import { strChange } from '../actions/strChangeAction';

function* incrementCounter(action: any) {
  try {
      const newNumber:number = yield call(asyncFunc,action.payload,1000);
      yield put({ type: counter.INCREMENT_SUCCESS, payload: newNumber, errorMessage: '' });
  } catch (e) {
      yield put({ type: counter.COUNTER_ERROR, errorMessage: e.message });
  }
}

function* decrementCounter(action: any) {
  try {
      const newNumber:number = yield call(asyncFunc,action.payload,500);
      yield put({ type: counter.DECREMENT_SUCCESS, payload: newNumber, errorMessage: '' });
  } catch (e) {
      yield put({ type: counter.COUNTER_ERROR, errorMessage: e.message });
  }
}

function* strToChange(action: any) {
  try {
      const newStr:string = yield call(asyncFunc,action.payload,1500);
      yield put({ type: strChange.STR_CHANGE_SUCCESS, payload: newStr, errorMessage: '' });
  } catch (e) {
      yield put({ type: strChange.STR_ERROR, errorMessage: e.message });
  }
}

function* strToDelete(action: any) {
  try {
      const newStr:string = yield call(asyncFunc,action.payload,2000);
      yield put({ type: strChange.STR_DELETE_SUCCESS, payload: newStr, errorMessage: '' });
  } catch (e) {
      yield put({ type: strChange.STR_ERROR, errorMessage: e.message });
  }
}


function* sagas() {
  yield takeEvery(counter.INCREMENT,incrementCounter);
  yield takeEvery(counter.DECREMENT,decrementCounter);
  yield takeEvery(strChange.STR_CHANGE,strToChange);
  yield takeEvery(strChange.STR_DELETE,strToDelete);
}

export default sagas;