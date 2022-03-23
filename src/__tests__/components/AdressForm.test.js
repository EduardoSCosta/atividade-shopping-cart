import { render, screen } from '@testing-library/react';
import AddressForm from '../../components/Checkout/AddressForm';
import countryAndStatesData from '../../data/countries_states.json';

describe('<AdressForm />', () => {
  describe('when the component is rendered', () => {
    it('should show an empty select country field', () => {
      render(
        <AddressForm
          selectedState={''}
          selectedCountry={''}
        />);

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });

      expect(selectCountryElement.value).toBeUndefined();
    });

    it('should show an empty select state field', () => {
      render(
        <AddressForm
          selectedState={''}
          selectedCountry={''}
        />);

      const selectStateElement = screen.getByRole('button', { name: /state\/province\/region ​/i });

      expect(selectStateElement.value).toBeUndefined();
    });
  });
});
