import { combineReducers } from 'redux'
import { ICounterChangeModel } from '../models/counterChangeModel';
import { strChangeReducer } from './strChangeReducer';
import { IStrChangeModel } from '../models/strChangeModel';
import { counterChangeReducer } from './counterChangeReducer';

export interface RootState {
  counter:ICounterChangeModel,
  strChange:IStrChangeModel
}


export const rootReducer = combineReducers({
  counter: counterChangeReducer,
  strChange: strChangeReducer,
})

//export type RootState = ReturnType<typeof rootReducer>