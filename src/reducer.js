import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./components/actions";

//reducer:
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREASE) {
    console.log("u increased");
  }

  if (action.type === DECREASE) {
    console.log("u decreased");
  }

  if (action.type === REMOVE) {
    console.log("remove action", action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
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
