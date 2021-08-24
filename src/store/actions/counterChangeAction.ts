  export enum counter {
    INCREMENT = 'INCREMENT',
    INCREMENT_SUCCESS = 'INCREMENT_SUCCESS',
    DECREMENT = 'DECREMENT',
    DECREMENT_SUCCESS = 'DECREMENT_SUCCESS',
    COUNTER_ERROR = 'COUNTER_ERROR',
  }

  export const incrementAction = (number: number) => {
    return {
        type: counter.INCREMENT,
        payload: number
    }
  }

  export const decrementAction = (number: number) => {
    return {
        type: counter.DECREMENT,
        payload: number
    }
  }

  export const incrementSuccessAction = (num: number) => {
    return {
        type: counter.INCREMENT_SUCCESS,
        payload: num
    }
  }

  export const decrementSuccessAction = (num: number) => {
    return {
        type: counter.DECREMENT_SUCCESS,
        payload: num
    }
  }
  

  export const counterErrorAction = (errorMessage: string) => {
    return {
        type: counter.COUNTER_ERROR,
        payload: errorMessage
    }
  }