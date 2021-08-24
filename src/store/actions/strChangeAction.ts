export enum strChange {
  STR_CHANGE = 'STR_CHANGE',
  STR_DELETE= 'STR_DELETE',
  STR_CHANGE_SUCCESS = 'STR_CHANGE_SUCCESS',
  STR_DELETE_SUCCESS = 'STR_DELETE_SUCCESS',
  STR_ERROR = 'STR_CHANGE_ERROR',
}

export interface IStrChange {
  str: string
}

export const strChangeAction = (str: string) => {
  return {
      type: strChange.STR_CHANGE,
      payload: str
  }
}

export const strDeleteAction = (str: string) => {
  return {
      type: strChange.STR_DELETE,
      payload: str
  }
}

export const strChangeSuccessAction = (strChangeData: IStrChange) => {
  return {
      type: strChange.STR_CHANGE_SUCCESS,
      payload: strChangeData
  }
}

export const strDeleteSuccessAction = (strChangeData: IStrChange) => {
  return {
      type: strChange.STR_DELETE_SUCCESS,
      payload: strChangeData
  }
}

export const strErrorAction = (errorMessage: string) => {
  return {
      type: strChange.STR_ERROR,
      payload: errorMessage
  }
}