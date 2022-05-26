import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import Cart from '../../components/Cart';

const theme = themes.light;

describe('<Cart />', () => {
  const cartItems = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show all items passed in props', () => {
      render(<ThemeProvider theme={theme}><Cart cartItems={cartItems} /></ThemeProvider>);

      const cartItemsElements = screen.getAllByTestId('cart-item');

      expect(cartItemsElements).toHaveLength(2);
    });
  });
});
