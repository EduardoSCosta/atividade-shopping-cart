import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../components/CartItem';

describe('<CartItem />', () => {
  const cartItem = { id: 1, name: 'test cartItem', description: 'test description' };

  it('should render the item name passed in props', () => {
    const removeFromCartFunction = jest.fn();

    render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction}/>)
    
    const cartItemNameElement = screen.getByText(cartItem.name);
    
    expect(cartItemNameElement).toBeInTheDocument();
  });

  it('should render the item description passed in props', () => {
    const removeFromCartFunction = jest.fn();

    render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction}/>)
    
    const cartItemDescriptionElement = screen.getByText(cartItem.description);
    
    expect(cartItemDescriptionElement).toBeInTheDocument();
  });

  it('should call the removeFromCart function', () => {
    const removeFromCartFunction = jest.fn();

    render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction}/>)

    const removeFromCartButton = screen.getByRole('button', {name: 'Remove from cart'});

    userEvent.click(removeFromCartButton)

    expect(removeFromCartFunction).toHaveBeenCalled();
  });
});
