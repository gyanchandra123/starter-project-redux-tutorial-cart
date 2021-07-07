import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

//default value:
const initialStore = {
  count: 10,
};

//reducer:
function reducer(state, action) {
  console.log("hhi redux");
  console.log("state :", state, "action :", action);
  if (action.type === "DECREASE") {
    //state.count= state.count-1 [* we can't mutate directly like this]
    return { count: state.count - 1 };
  }
  return state;
}
  
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" }); //action passed

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar card={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;

/* 
store = use for storing data like a state.
reducer = must be the parameter of the createStore(), its a normal js function
    1. the reducer take 2 arguments
      a.state : old state/state before update
      b.action : what happen/what update 
      [must be an object, with the proprty type and value as "action type" in string]
    2. return : updated state / old state. 
    3. we must alawys return the old state from the reducer function, if there is
no updated state to be share after checking the action.  
    
** so reducer is used for updating store,Since we can't directly update/add data in
the store.

 */
