import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import AddressForm from '../../components/Checkout/AddressForm';
import themes from '../../theme';

const theme = themes.light;

describe('<AdressForm />', () => {
  describe('when the component is rendered', () => {
    const formValues = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      country: '',
      region: '',
      rememberAddress: false,
      nameOnCard: '',
      cardNumber: '',
      expiryDate: '',
      rememberCard: false,
      cvv: ''
    }

    it('should show an empty select country field', () => {
      render(<ThemeProvider theme={theme}><AddressForm formValues={formValues} /></ThemeProvider>);

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });

      expect(selectCountryElement.value).toBeUndefined();
    });

    it('should show an empty select state field', () => {
      render(<ThemeProvider theme={theme}><AddressForm formValues={formValues} /></ThemeProvider>);

      const selectStateElement = screen.getByRole('button', { name: /state\/province\/region ​/i });

      expect(selectStateElement.value).toBeUndefined();
    });
  });
});
