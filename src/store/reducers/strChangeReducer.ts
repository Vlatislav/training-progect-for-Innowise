import {AnyAction} from 'redux';
import { strChange } from '../actions/strChangeAction';
import { IStrChangeModel } from '../models/decrementModel copy';

const initialState:IStrChangeModel = {
  str:'',
  errorMessage: ''
}

export const strChangeReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
      case strChange.STR_CHANGE: {
          return { ...state }
      }
      case strChange.STR_CHANGE_SUCCESS: {
          return { ...state,str:action.payload, errorMessage: '' }
      }
      case strChange.STR_CHANGE_ERROR: {
          return { ...state, errorMessage: action.payload }
      }
      default: return { ...state }
  }
}