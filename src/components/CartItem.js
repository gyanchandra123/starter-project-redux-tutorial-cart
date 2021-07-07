import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "./actions";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapToDispatchProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    //this action will be passed as props to the <carditem> component
    remove: () => dispatch({ type: REMOVE, payload: { id: id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id: id } }),
    decrease: () =>
      dispatch({ type: DECREASE, payload: { id: id, amount: amount } }),
  };
};

export default connect(null, mapToDispatchProps)(CartItem);
/* 
for video:389
  1. why null at 1st para: since all the props required are passed as props from the 
  parent component cartcontainer. there is no need to pass another mapStateToProps to 
  get those state values, so we to avoid passing, we need to put null
*/

/* for 390: video:
 1. <article> ---------------------------> from the parent component:cardcontainer
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>

2. so the (...item) passed as prop at line 52 to the child component:cardTitle is always
avaialble inside the mapToDispatchProps() function as second  parameter.

3. from this item props , we can get the id for each of the item and use in the remove operation
4. but to pass this id value inside the action/reducer, we need to use the "payload"  object

*/
