import Product from './Product';
import '../styles/components/_productsList.css';

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className='page'>
      <h2 className='page__title'>Products List</h2>
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
