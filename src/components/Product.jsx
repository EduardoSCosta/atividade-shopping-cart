import '../styles/components/_product.css';
import { Button, Text } from '../components';
import { css } from '@styled-system/css';

const Product = ({ product, addToCart }) => {
  return (
    <div className='product' data-testid='product'>
      <Text variant='p' css={css({ textTransform: 'capitalize' })}>{product.name}</Text>
      <Text variant='p' as='p' css={css({ textTransform: 'capitalize' })}>{product.description}</Text>
      <Button variant='green' type='button' onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
}

export default Product;
