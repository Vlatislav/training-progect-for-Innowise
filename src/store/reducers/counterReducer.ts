interface Action{
  type:string,
  payload:any;
}


const initialState = {
  counter:0,
}

export const counterReducer = (state=initialState,action:Action) =>{
  switch(action.type){
    case 'INCREMENT': 
      return {...state,counter:state.counter+action.payload}
    case 'DECCREMENT': 
      return {...state,counter:state.counter-action.payload}
    default:
      return state
  }
}