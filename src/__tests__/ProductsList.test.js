import { render, screen } from '@testing-library/react';
import ProductsList from '../components/ProductsList';

describe('<ProductsList />', () => {
  const products = [
    { id: 1, name: 'first test product', description: 'first test product description' },
    { id: 2, name: 'second test product', description: 'second test product description' }
  ];

  describe('when the component is rendered', () => {
    it('should show all products passed in props', () => {
      render(<ProductsList products={products} />);

      const productsElements = screen.getAllByTestId('product');

      expect(productsElements).toHaveLength(2);
    });
  });
});
