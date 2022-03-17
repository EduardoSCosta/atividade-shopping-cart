import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

describe('<Cart />', () => {
  const cartItems = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show all items passed in props', () => {
      render(<Cart cartItems={cartItems} />);

      const cartItemsElements = screen.getAllByTestId('cart-item');

      expect(cartItemsElements).toHaveLength(2);
    });
  });
});
