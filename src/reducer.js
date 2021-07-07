import {DECREASE,INCREASE} from './components/actions'

//reducer:
function reducer(state, action) {  
    if (action.type === DECREASE) {
      //state.count= state.count-1 [* we can't mutate directly like this]
      return {...state, count: state.count - 1,name:"anna" };
    }
  
    if (action.type === INCREASE) {
      //state.count= state.count-1 [* we can't mutate directly like this]
      return { ...state,count: state.count + 1 };
    }
   
    return state;
  }

  export default reducer;