import { DECREASE, INCREASE, CLEAR_CART,REMOVE } from "./components/actions";

//reducer:
function reducer(state, action) {
   if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREASE) {
    return  console.log('u increased');
  }

  if (action.type === DECREASE) {
    return console.log('u decreased');
  }

  if (action.type === REMOVE) {
    return console.log('u reset');
  }
  return state; // never forget to return the modified state , otherwise we will get eror.

  /* switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  } */
}

export default reducer;
