import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkout from '../../components/Checkout';

describe('<Checkout />', () => {
  describe('when the component is rendered', () => {
    it('should show the page heading with "Checkout" text', () => {
      render(<Checkout />);

      const checkoutHeadingElement = screen.getByRole('heading', { name: 'Checkout' });

      expect(checkoutHeadingElement).toBeInTheDocument();
    });

    it('should show the current step heading with "Shipping address" text', () => {
      render(<Checkout />);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Shipping address' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when Next button is clicked one time', () => {
    it('should show the current step heading with "Payment method" text', () => {
      render(<Checkout />);

      const nextStepButton = screen.getByRole('button', { name: 'Next' });

      userEvent.click(nextStepButton);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Payment method' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when Next button is clicked two times', () => {
    it('should show the current step heading with "Order summary" text', () => {
      render(<Checkout />);

      const nextStepButton = screen.getByRole('button', { name: 'Next' });

      userEvent.click(nextStepButton);
      userEvent.click(nextStepButton);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Order summary' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when an option is selected', () => {
    it('should show the selected country in the field', () => {
      render(<Checkout />);

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });
      userEvent.click(selectCountryElement);

      const optionCountryElement = screen.getByRole('option', { name: /brazil/i });
      userEvent.click(optionCountryElement);

      const selectedCountryElement = screen.getByRole('button', { name: /country brazil/i });

      expect(selectedCountryElement).toBeInTheDocument();
    });

    it('should show the selected state in the field', () => {
      render(<Checkout />);

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });
      userEvent.click(selectCountryElement);

      const optionCountryElement = screen.getByRole('option', { name: /brazil/i });
      userEvent.click(optionCountryElement);

      const selectStateElement = screen.getByRole('button', { name: /state\/province\/region ​/i });
      userEvent.click(selectStateElement);

      const optionStateElement = screen.getByRole('option', { name: /goias/i });
      userEvent.click(optionStateElement);

      const selectedStateElement = screen.getByRole('button', { name: /state\/province\/region goias/i });

      expect(selectedStateElement).toBeInTheDocument();
    });
  });
});
