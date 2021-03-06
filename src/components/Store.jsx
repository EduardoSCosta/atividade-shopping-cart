import { useState } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import SelectPageButton from './SelectPageBtn';
import Checkout from './Checkout';
import '../styles/components/_store.css'

const PRODUCTS_LIST = [
  { id: 1, name: 'product one', description: 'This is product one.' },
  { id: 2, name: 'product two', description: 'This is product two.' },
  { id: 3, name: 'product three', description: 'This is product three.' },
  { id: 4, name: 'product four', description: 'This is product four.' }
]
const PRODUCTS_PAGE = 'products';
const CART_PAGE = 'cart';
const CHECKOUT_PAGE = 'checkout';

const Store = ({ productsList = PRODUCTS_LIST }) => {
  const [products, setProducts] = useState(productsList);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(PRODUCTS_PAGE);

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some(cartItem => cartItem.id === product.id);

    if (!isAlreadyInCart) {
      setCartItems([...cartItems, product]);
    }
  }

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id));
  }

  return (
    <>
      <header className='header'>
        <SelectPageButton pageName={PRODUCTS_PAGE} setCurrentPage={setCurrentPage} />
        <SelectPageButton pageName={CART_PAGE} setCurrentPage={setCurrentPage} />
      </header>
      {(currentPage === PRODUCTS_PAGE) && <ProductsList products={products} addToCart={addToCart} />}
      {(currentPage === CART_PAGE) &&
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          goToCheckout={() => setCurrentPage(CHECKOUT_PAGE)}
        />}
      {(currentPage === CHECKOUT_PAGE) && <Checkout />}
    </>
  );
}

export default Store;
