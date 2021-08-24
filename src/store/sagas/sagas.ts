import { call, put, takeEvery } from 'redux-saga/effects' 
import { increment } from '../actions/incrementAction';
import { incrementFunc } from '../services/async_methods';

function* incrementCounter(action: any) {
  try {
      console.log(action, 'INCREMENT')
      const newNumber:number = yield call(incrementFunc,action.payload);
      yield put({ type: increment.INCREMENT_SUCCESS, payload: newNumber, errorMessage: '' });
  } catch (e) {
      yield put({ type: increment.INCREMENT_ERROR, errorMessage: e.message });
  }
}


function* sagas() {
  yield takeEvery(increment.INCREMENT,incrementCounter);
}

export default sagas;