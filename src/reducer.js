import { DECREASE, INCREASE, CLEAR_CART } from "./components/actions";

//reducer:
function reducer(state, action) {
   if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
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
