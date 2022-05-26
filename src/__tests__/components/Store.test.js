import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Store from '../../components/Store';
import themes from '../../theme';

const theme = themes.light;

describe('<Store />', () => {
  const products = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show a product with the name passed in props', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const productNameElement = screen.getByText(products[0].name);

      expect(productNameElement).toBeInTheDocument();
    });

    it('should show a product with the description passed in props', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const productDescriptionElement = screen.getByText(products[0].description);

      expect(productDescriptionElement).toBeInTheDocument();
    });
  });

  describe('when Add to cart button is clicked', () => {
    it('should add the product in the cart', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const addToCartButton = screen.getAllByRole('button', { name: 'Add to cart' });
      const cartButton = screen.getByRole('button', { name: 'cart' });

      userEvent.click(addToCartButton[0]);
      userEvent.click(cartButton);

      const cartItemNameElement = screen.getByText(products[0].name);

      expect(cartItemNameElement).toBeInTheDocument();
    });
  });

  describe('when Remove from cart button is clicked', () => {
    it('should remove the item from cart', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const addToCartButton = screen.getAllByRole('button', { name: 'Add to cart' });
      const cartButton = screen.getByRole('button', { name: 'cart' });

      userEvent.click(addToCartButton[0]);
      userEvent.click(cartButton);

      const cartItemNameElement = screen.getByText(products[0].name);
      const removeFromCartButton = screen.getByRole('button', { name: 'Remove from cart' });

      userEvent.click(removeFromCartButton);

      expect(cartItemNameElement).not.toBeInTheDocument();
    });
  });

  describe('when Checkout button is clicked', () => {
    it('should go to checkout page', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const cartButton = screen.getByRole('button', { name: 'cart' });
      userEvent.click(cartButton);

      const checkoutButton = screen.getByRole('button', { name: 'Checkout' });
      userEvent.click(checkoutButton);

      const checkoutHeadingElement = screen.getByRole('heading', { name: 'Checkout' });

      expect(checkoutHeadingElement).toBeInTheDocument();
    });
  });

  describe('when items are added to the cart', () => {
    it('should show the cart items in the checkout review', () => {
      render(<ThemeProvider theme={theme}><Store productsList={products} /></ThemeProvider>);

      const addToCartButton = screen.getAllByRole('button', { name: 'Add to cart' });
      const cartButton = screen.getByRole('button', { name: 'cart' });

      userEvent.click(addToCartButton[0]);
      userEvent.click(cartButton);

      const checkoutButton = screen.getByRole('button', { name: 'Checkout' });
      userEvent.click(checkoutButton);

      const firstNameElement = screen.getByRole('textbox', { name: /first name/i });
      userEvent.type(firstNameElement, "John");

      const lastNameElement = screen.getByRole('textbox', { name: /last name/i });
      userEvent.type(lastNameElement, "Doe");

      const address1Element = screen.getByRole('textbox', { name: /address line 1/i });
      userEvent.type(address1Element, "My address1");
      
      const address2Element = screen.getByRole('textbox', { name: /address line 2/i });
      userEvent.type(address2Element, "My address2");

      const zipCodeElement = screen.getByRole('textbox', { name: /zip \/ postal code/i });
      userEvent.type(zipCodeElement, "123456");

      const cityElement = screen.getByRole('textbox', { name: /city/i });
      userEvent.type(cityElement, "Test Land");

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });
      userEvent.click(selectCountryElement);

      const optionCountryElement = screen.getByRole('option', { name: /brazil/i });
      userEvent.click(optionCountryElement);
      
      const selectStateElement = screen.getByRole('button', { name: /state\/province\/region ​/i });
      userEvent.click(selectStateElement);

      const optionStateElement = screen.getByRole('option', { name: /goias/i });
      userEvent.click(optionStateElement);

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      const nameOnCardElement = screen.getByRole('textbox', { name: /name on card/i });
      userEvent.type(nameOnCardElement, "John Doe");

      const cardNumberElement = screen.getByRole('textbox', { name: /card number/i });
      userEvent.type(cardNumberElement, "1234567887654321");

      const expiryDateElement = screen.getByRole('textbox', { name: /expiry date/i });
      userEvent.type(expiryDateElement, "31/12/2200");

      const cvvElement = screen.getByRole('textbox', { name: /cvv/i });
      userEvent.type(cvvElement, "321");

      userEvent.click(nextStepButton);

      const cartItemNameElement = screen.getByText(products[0].name);

      expect(cartItemNameElement).toBeInTheDocument();
    });
  });
});
