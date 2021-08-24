export enum decrement {
  DECREMENT = 'DECREMENT',
  DECREMENT_SUCCESS = 'DECREMENT_SUCCESS',
  DECREMENT_ERROR = 'DECREMENT_ERROR',
}

export interface IDecrement {
  counter: number
}

export const incrementAction = (number: number) => {
  return {
      type: decrement.DECREMENT,
      payload: number
  }
}

export const incrementSuccessAction = (decrementData: IDecrement) => {
  return {
      type: decrement.DECREMENT_SUCCESS,
      payload: decrementData
  }
}

export const loginErrorAction = (errorMessage: string) => {
  return {
      type: decrement.DECREMENT_ERROR,
      payload: errorMessage
  }
}