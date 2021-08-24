import { combineReducers } from 'redux'
import { IIncrementModel } from '../models/incrementModel';
import { decrementReducer } from './decrementReducer';
import { incrementReducer } from './incrementReducer';
import { strChangeReducer } from './strChangeReducer';
import { IDecrementModel } from './../models/decrementModel';
import { IStrChangeModel } from '../models/decrementModel copy';

export interface RootState {
  increment:IIncrementModel,
  decrement:IDecrementModel,
  strChange:IStrChangeModel
}


export const rootReducer = combineReducers({
  increment: incrementReducer,
  decrement: decrementReducer,
  strChange: strChangeReducer,
})

//export type RootState = ReturnType<typeof rootReducer>