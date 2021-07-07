import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./components/actions";

//reducer:
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREASE) {
    console.log("u increased");
    /* 
      1. we need to perform the increase functionality based on the id of the card-item.
      2. if the id in the payload matches with the id of the old card-item in the state,
      3. then only , increase the amount property value for that item
      4. use spread operator.
     */

    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === DECREASE) {
    console.log("u decreased");

    let tempCart = [];

    if(action.payload.amount===1){
      console.log('reaches cart limit 1')
      tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)

    }else{
        tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }

    return {...state,cart:tempCart}
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
