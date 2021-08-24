  export enum increment {
    INCREMENT = 'INCREMENT',
    INCREMENT_SUCCESS = 'INCREMENT_SUCCESS',
    INCREMENT_ERROR = 'INCREMENT_ERROR',
  }

  export const incrementAction = (number: number) => {
    return {
        type: increment.INCREMENT,
        payload: number
    }
  }

  export const incrementSuccessAction = (num: number) => {
    console.log('incrementSuccessAction',num)
    return {
        type: increment.INCREMENT_SUCCESS,
        payload: num
    }
  }

  export const loginErrorAction = (errorMessage: string) => {
    return {
        type: increment.INCREMENT_ERROR,
        payload: errorMessage
    }
  }