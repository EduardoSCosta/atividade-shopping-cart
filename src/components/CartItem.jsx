import '../styles/components/_cartItem.css';
import { Button, Text } from '../components';
import { css } from '@styled-system/css';

const CartItem = ({ cartItem, removeFromCart }) => {
  return (
    <div className='cart-item' data-testid='cart-item'>
      <Text variant='p' css={css({ textTransform: 'capitalize' })}>{cartItem.name}</Text>
      <Text
        variant='p'
        as='p'
        css={css({
          textTransform: 'capitalize',
          marginX: [6]})}>
        {cartItem.description}
      </Text>
      <Button variant='red' type='button' onClick={removeFromCart}>
        Remove from cart
      </Button>
    </div>
  );
}

export default CartItem;
