import {AnyAction} from 'redux';
import { increment } from "../actions/incrementAction"
import { IIncrementModel } from "../models/incrementModel"

const initialState:IIncrementModel = {
  counter:0,
  errorMessage: ''
}

export const incrementReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
      case increment.INCREMENT: {
          return { ...state }
      }
      case increment.INCREMENT_SUCCESS: {
          return { ...state,counter:state.counter+action.payload, errorMessage: `---${action.payload}` }
      }
      case increment.INCREMENT_ERROR: {
          return { ...state, errorMessage: action.payload }
      }
      default: return { ...state }
  }
}