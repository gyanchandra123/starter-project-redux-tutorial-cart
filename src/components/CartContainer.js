import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "./actions";

const CartContainer = ({ cart = [], total, dispatch }) => {

  /*
  1. this is required to calculate the total amount
  2. this need to execute everytime beacuse, when we increase/decrease any cart,
  the cartcontainer gets re-render , and so that the total calculation could be
  executed for every change in the cart
   */
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch({ type: CLEAR_CART });
            // after passing the action here, we need to catch in the reducer() function
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  // here we need to access the card-item[] and the total value from the app.js
  /*  const initialStore = {
    card: cartItems,----------> this
    total: 105,    ,----------> this
    amount: 50,
  }; 
  
  note : 
  1. this function implicitly return the dispatch() function from the store along with the
          state in the store
          -this is the reason we can use dispatch directly as props in the above line6

   2. the return value of this function is passed as a props to this <Navbar> component
  */

  //return {card:store.card,total:store.total} OR
  const { cart, total } = store;
  return { cart, total };
}

export default connect(mapStateToProps)(CartContainer);
