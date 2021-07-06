import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

//reducer:
function reducer() {
  console.log("hhi redux");
}
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;

/* 
store = use for storing data like a state.
reducer = must be the parameter of the createStore(), its a normal js function
 */
