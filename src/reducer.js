import { DECREASE, INCREASE, CLEAR_CART } from "./components/actions";

//reducer:
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state; // never forget to return the modified state , otherwise we will get eror.
}

export default reducer;
