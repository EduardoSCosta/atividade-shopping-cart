import '../styles/components/_cart.css'
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, goToCheckout }) => {
  return (
    <div className='page'>
      <h2 className='page__title'>Cart</h2>
      <div className='cart-items-list'>
        {cartItems.map((cartItem) => {
          return (
            <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={() => removeFromCart(cartItem)}/>
          );
        })}
      </div>
      <button className='button button--checkout-page' type='button' onClick={goToCheckout}>
      Checkout
    </button>
    </div>
  );
}

export default Cart;
