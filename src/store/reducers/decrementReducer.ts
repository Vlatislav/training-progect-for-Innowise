import {AnyAction} from 'redux';
import { decrement } from '../actions/decrementAction';
import { IDecrementModel } from './../models/decrementModel';

const initialState:IDecrementModel = {
  counter:0,
  errorMessage: ''
}

export const decrementReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
      case decrement.DECREMENT: {
          return { ...state }
      }
      case decrement.DECREMENT_SUCCESS: {
          return { ...state,counter:state.counter-action.payload, errorMessage: '' }
      }
      case decrement.DECREMENT_ERROR: {
          return { ...state, errorMessage: action.payload }
      }
      default: return { ...state }
  }
}