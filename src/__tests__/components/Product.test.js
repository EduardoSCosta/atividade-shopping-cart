import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import Product from '../../components/Product';

const theme = themes.light;

describe('<Product />', () => {
  const product = { id: 1, name: 'test product', description: 'test description' };

  describe('when the component is rendered', () => {
    it('should show the product name passed in props', () => {
      const addToCartFunction = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <Product product={product} addToCart={addToCartFunction} />
        </ThemeProvider>);

      const productNameElement = screen.getByText(product.name);

      expect(productNameElement).toBeInTheDocument();
    });

    it('should show the product description passed in props', () => {
      const addToCartFunction = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <Product product={product} addToCart={addToCartFunction} />
        </ThemeProvider>);

      const productDescriptionElement = screen.getByText(product.description);

      expect(productDescriptionElement).toBeInTheDocument();
    });
  });

  describe('when the Add to cart button is clicked', () => {
    it('should call the addToCart function', () => {
      const addToCartFunction = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <Product product={product} addToCart={addToCartFunction} />
        </ThemeProvider>);

      const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });

      userEvent.click(addToCartButton);

      expect(addToCartFunction).toHaveBeenCalled();
    });
  });
});
