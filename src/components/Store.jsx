import { useState } from 'react';
import Cart from './Cart';
import ProductsList from './ProductsList';
import SelectPageButton from './SelectPageBtn';
import '../styles/components/_store.css'

const PRODUCTS_LIST = [
  { name: 'product one', description: 'This is product one.'},
  { name: 'product two', description: 'This is product two.'},
  { name: 'product three', description: 'This is product three.'},
  { name: 'product four', description: 'This is product four.'},
]
const PRODUCTS_PAGE = 'products';
const CART_PAGE = 'cart'

const Store = () => {
  const [products, setProducts] = useState(PRODUCTS_LIST);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(PRODUCTS_PAGE);

  const isCurrentPage = currentPage === PRODUCTS_PAGE;
  return(
    <>
      <header className='header'>
        <SelectPageButton pageName={PRODUCTS_PAGE} setCurrentPage={setCurrentPage} />
        <SelectPageButton pageName={CART_PAGE} setCurrentPage={setCurrentPage} />
      </header>
        <h1>Store</h1>
        { (isCurrentPage) ? 
          <ProductsList />
        :
          <Cart /> 
        }
    </>
  );
}

export default Store;
