import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../components/Product';

describe('<Product />', () => {
  const product = { id: 1, name: 'test product', description: 'test description' };

  it('should render the product name passed in props', () => {
    const addToCartFunction = jest.fn();

    render(<Product product={product} addToCart={addToCartFunction}/>)
    
    const productNameElement = screen.getByText(product.name);
    
    expect(productNameElement).toBeInTheDocument();
  });

  it('should render the product description passed in props', () => {
    const addToCartFunction = jest.fn();

    render(<Product product={product} addToCart={addToCartFunction}/>)
    
    const productDescriptionElement = screen.getByText(product.description);
    
    expect(productDescriptionElement).toBeInTheDocument();
  });

  it('should call the addToCart function', () => {
    const addToCartFunction = jest.fn();

    render(<Product product={product} addToCart={addToCartFunction}/>)

    const addToCartButton = screen.getByRole('button', {name: 'Add to cart'});

    userEvent.click(addToCartButton)

    expect(addToCartFunction).toHaveBeenCalled();
  });
});
