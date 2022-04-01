import Product from './Product';
import { Text } from '../components';
import { css } from '@styled-system/css';
import '../styles/components/_productsList.css';

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className='page'>
      <Text variant='h2'
        css={css({
          textAlign: 'center',
          marginY: [4]
        })}
      >
        Products List
      </Text>
      <div className='products-list'>
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
