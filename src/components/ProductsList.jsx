import Product from './Product';

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className='products-list'>
      <h2>Products List</h2>
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
        );
      })}
    </div>
  );
}

export default ProductsList;
