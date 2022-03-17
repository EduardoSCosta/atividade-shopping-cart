import '../styles/components/_cartItem.css';

const CartItem = ({ cartItem, removeFromCart }) => {
  return (
    <div className='cart-item' data-testid='cart-item'>
      <p className='cart-item__name'>{cartItem.name}</p>
      <p className='cart-item__description'>{cartItem.description}</p>
      <button className='button cart-item__remove-from-cart-button' type='button' onClick={removeFromCart}>
        Remove from cart
      </button>
    </div>
  );
}

export default CartItem;
