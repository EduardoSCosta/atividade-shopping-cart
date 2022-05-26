import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import ProductsList from '../../components/ProductsList';

const theme = themes.light;

describe('<ProductsList />', () => {
  const products = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show all products passed in props', () => {
      render(<ThemeProvider theme={theme}><ProductsList products={products} /></ThemeProvider>);

      const productsElements = screen.getAllByTestId('product');

      expect(productsElements).toHaveLength(2);
    });
  });
});
