import { useState } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import SelectPageButton from './SelectPageBtn';
import '../styles/components/_store.css'

const PRODUCTS_LIST = [
  { id: 1, name: 'product one', description: 'This is product one.' },
  { id: 2, name: 'product two', description: 'This is product two.' },
  { id: 3, name: 'product three', description: 'This is product three.' },
  { id: 4, name: 'product four', description: 'This is product four.' }
]
const PRODUCTS_PAGE = 'products';
const CART_PAGE = 'cart';

const Store = () => {
  const [products, setProducts] = useState(PRODUCTS_LIST);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(PRODUCTS_PAGE);

  const isCurrentPage = currentPage === PRODUCTS_PAGE;

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  }

  return (
    <>
      <header className='header'>
        <SelectPageButton pageName={PRODUCTS_PAGE} setCurrentPage={setCurrentPage} />
        <SelectPageButton pageName={CART_PAGE} setCurrentPage={setCurrentPage} />
      </header>
      <h1>Store</h1>
      {(isCurrentPage) ?
        <ProductsList products={products} addToCart={addToCart} />
        :
        <Cart />
      }
    </>
  );
}

export default Store;
