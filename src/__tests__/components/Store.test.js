import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Store from '../../components/Store';

describe('<Store />', () => {
  const products = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show a product with the name passed in props', () => {
      render(<Store productsList={products} />);

      const productNameElement = screen.getByText(products[0].name);

      expect(productNameElement).toBeInTheDocument();
    });

    it('should show a product with the description passed in props', () => {
      render(<Store productsList={products} />);

      const productDescriptionElement = screen.getByText(products[0].description);

      expect(productDescriptionElement).toBeInTheDocument();
    });
  });

  describe('when Add to cart button is clicked', () => {
    it('should add the product in the cart', () => {
      render(<Store productsList={products} />);

      const addToCartButton = screen.getAllByRole('button', { name: 'Add to cart' });
      const cartButton = screen.getByRole('button', { name: 'cart' });

      userEvent.click(addToCartButton[0]);
      userEvent.click(cartButton);

      const carItemNameElement = screen.getByText(products[0].name);

      expect(carItemNameElement).toBeInTheDocument();
    });
  });

  describe('when Remove from cart button is clicked', () => {
    it('should remove the item from cart', () => {
      render(<Store productsList={products} />);

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
      render(<Store productsList={products} />);

      const cartButton = screen.getByRole('button', { name: 'cart' });
      userEvent.click(cartButton);

      const checkoutButton = screen.getByRole('button', { name: 'Checkout' });
      userEvent.click(checkoutButton);

      const checkoutHeadingElement = screen.getByRole('heading', { name: 'Checkout' });

      expect(checkoutHeadingElement).toBeInTheDocument();
    });
  });
});
