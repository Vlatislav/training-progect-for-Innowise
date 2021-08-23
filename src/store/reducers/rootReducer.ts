import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer';
import { strReducer } from './strReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  str: strReducer,
})

export type RootState = ReturnType<typeof rootReducer>