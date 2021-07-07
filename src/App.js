import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";
import { DECREASE, INCREASE } from "./components/actions";
import reducer from "./reducer";
import { Provider } from "react-redux";

//default value:
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 50,
};

const store = createStore(reducer, initialStore);

console.log(store)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  );
}

export default App;
