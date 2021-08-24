export enum strChange {
  STR_CHANGE = 'INCREMENT',
  STR_CHANGE_SUCCESS = 'STR_CHANGE_SUCCESS',
  STR_CHANGE_ERROR = 'STR_CHANGE_ERROR',
}

export interface IStrChange {
  str: string
}

export const incrementAction = (log: number) => {
  return {
      type: strChange.STR_CHANGE,
      payload: log
  }
}

export const incrementSuccessAction = (strChangeData: IStrChange) => {
  return {
      type: strChange.STR_CHANGE_SUCCESS,
      payload: strChangeData
  }
}

export const loginErrorAction = (errorMessage: string) => {
  return {
      type: strChange.STR_CHANGE_ERROR,
      payload: errorMessage
  }
}