import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";
import {DECREASE,INCREASE} from './components/actions';
import reducer from './reducer'

//default value:
const initialStore = {
  count: 0,
  name: "smith"
};


  
const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE }); //action passed
store.dispatch({ type: INCREASE }); 
store.dispatch({ type: INCREASE }); 
 

console.log('latest state :',store.getState());

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
