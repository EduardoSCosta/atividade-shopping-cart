import '../styles/components/_product.css';

const Product = ({product, addToCart}) => {
  return (
    <div className='product' data-testid='product'>
      <p className='product__name'>{product.name}</p>
      <p className='product__description'>{product.description}</p>
      <button className='button product__add-to-cart-button' type='button' onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
