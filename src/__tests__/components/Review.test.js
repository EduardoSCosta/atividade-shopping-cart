import { render, screen } from '@testing-library/react';
import Review from '../../components/Checkout/Review';

describe('<Review />', () => {
  describe('when the component is rendered', () => {
    const formValues = {
      firstName: 'John',
      lastName: 'Doe',
      address1: 'My address1',
      address2: 'My address2',
      zipCode: '123456',
      city: 'Test Land',
      country: 'Brazil',
      region: 'Goias',
      rememberAddress: false,
      nameOnCard: 'John Doe',
      cardNumber: '1234567887654321',
      expiryDate: '31/12/2200',
      rememberCard: false,
      cvv: '321'
    };
    
    it('should show the first and last name passed in props', () => {
      render(<Review formValues={formValues} />);

      const nameElement = screen.getAllByText(`${formValues.firstName} ${formValues.lastName}`);

      expect(nameElement[0]).toBeInTheDocument();
    });

    it('should show the addresses passed in props', () => {
      render(<Review formValues={formValues} />);

      const addressElement = screen.getByText(`${formValues.address1}, ${formValues.address2}`);

      expect(addressElement).toBeInTheDocument();
    });

    it('should show the zip code and city passed in props', () => {
      render(<Review formValues={formValues} />);

      const zipAndCityElement = screen.getByText(`${formValues.zipCode}, ${formValues.city}`);

      expect(zipAndCityElement).toBeInTheDocument();
    });

    it('should show the country and state/province/region passed in props', () => {
      render(<Review formValues={formValues} />);

      const countryAndRegionElement = screen.getByText(`${formValues.country}, ${formValues.region}`);

      expect(countryAndRegionElement).toBeInTheDocument();
    });

    it('should show the name on card passed in props', () => {
      render(<Review formValues={formValues} />);

      const nameElement = screen.getAllByText(formValues.nameOnCard);

      expect(nameElement[1]).toBeInTheDocument();
    });

    it('should show only the last four number of the card passed in props', () => {
      render(<Review formValues={formValues} />);

      const cardNumberElement = screen.getByText(`XXXX-XXXX-${formValues.cardNumber.slice(-4)}`);

      expect(cardNumberElement).toBeInTheDocument();
    });

    it('should show the expiry date passed in props', () => {
      render(<Review formValues={formValues} />);

      const expiryDateElement = screen.getByText(formValues.expiryDate);

      expect(expiryDateElement).toBeInTheDocument();
    });
  });
});
