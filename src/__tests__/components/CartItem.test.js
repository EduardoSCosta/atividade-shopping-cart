import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../../components/CartItem';

describe('<CartItem />', () => {
  const cartItem = { id: 1, name: 'test cartItem', description: 'test description' };

  describe('when the component is rendered', () => {
    it('should show the item name passed in props', () => {
      const removeFromCartFunction = jest.fn();

      render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction} />);

      const cartItemNameElement = screen.getByText(cartItem.name);

      expect(cartItemNameElement).toBeInTheDocument();
    });

    it('should show the item description passed in props', () => {
      const removeFromCartFunction = jest.fn();

      render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction} />);

      const cartItemDescriptionElement = screen.getByText(cartItem.description);

      expect(cartItemDescriptionElement).toBeInTheDocument();
    });
  });

  describe('when the Remove from cart button is clicked', () => {
    it('should call the removeFromCart function', () => {
      const removeFromCartFunction = jest.fn();

      render(<CartItem cartItem={cartItem} removeFromCart={removeFromCartFunction} />);

      const removeFromCartButton = screen.getByRole('button', { name: 'Remove from cart' });

      userEvent.click(removeFromCartButton);

      expect(removeFromCartFunction).toHaveBeenCalled();
    });
  });
});
