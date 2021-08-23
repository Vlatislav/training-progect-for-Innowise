interface Action{
  type:string,
  payload:string;
}


const initialState = {
  text:'EMPTY'
}

export const strReducer = (state=initialState,action:Action) =>{
  switch(action.type){
    case 'SET_VALUE': 
      return {...state,text:action.payload}
    case 'DELETE_VALUE': 
      return {...state,text:'...'}
    default:
      return state
  }
}