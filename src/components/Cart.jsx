import '../styles/components/_cart.css'
import CartItem from './CartItem';
import { Button, Text } from '../components';
import { css } from '@styled-system/css';

const Cart = ({ cartItems, removeFromCart, goToCheckout }) => {
  return (
    <div className='page'>
      <Text variant='h2'
        css={css({
          textAlign: 'center',
          marginY: [4]
        })}
      >
        Cart
      </Text>
      <div className='cart-items-list'>
        {cartItems.map((cartItem) => {
          return (
            <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={() => removeFromCart(cartItem)} />
          );
        })}
      </div>
      <Button
        variant='blue'
        css={css({
          display: 'block',
          marginX: 'auto',
          marginY: [3]
        })}
        type='button'
        onClick={goToCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
