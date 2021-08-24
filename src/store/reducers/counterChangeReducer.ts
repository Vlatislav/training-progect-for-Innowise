import {AnyAction} from 'redux';
import { counter } from "../actions/counterChangeAction"
import { ICounterChangeModel } from "../models/counterChangeModel"

const initialState:ICounterChangeModel = {
  counter:0,
  errorMessage: ''
}

export const counterChangeReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
      case counter.INCREMENT: {
          return { ...state }
      }
      case counter.INCREMENT_SUCCESS: {
          return { ...state,counter:state.counter+action.payload, errorMessage: `` }
      }
      case counter.DECREMENT: {
        return { ...state }
      }
      case counter.DECREMENT_SUCCESS: {
          return { ...state,counter:state.counter-action.payload, errorMessage: `` }
      }
      case counter.COUNTER_ERROR: {
          return { ...state, errorMessage: action.payload }
      }
      default: return { ...state }
  }
}