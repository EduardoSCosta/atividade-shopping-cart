import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Checkout from '../../components/Checkout';
import themes from '../../theme';

const theme = themes.light;

const fillAddressForm = () => {
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
}

const fillPaymentForm = () => {
  const nameOnCardElement = screen.getByRole('textbox', { name: /name on card/i });
  userEvent.type(nameOnCardElement, "John Doe");
  const cardNumberElement = screen.getByRole('textbox', { name: /card number/i });
  userEvent.type(cardNumberElement, "1234567887654321");
  const expiryDateElement = screen.getByRole('textbox', { name: /expiry date/i });
  userEvent.type(expiryDateElement, "31/12/2200");
  const cvvElement = screen.getByRole('textbox', { name: /cvv/i });
  userEvent.type(cvvElement, "321");
}

const clickNextAndBackButton = () => {
  const nextStepButton = screen.getByRole('button', { name: 'Next' });
  userEvent.click(nextStepButton);

  const previousStepButton = screen.getByRole('button', { name: 'Back' });
  userEvent.click(previousStepButton);
}

describe('<Checkout />', () => {
  describe('when the component is rendered', () => {
    it('should show the page heading with "Checkout" text', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      const checkoutHeadingElement = screen.getByRole('heading', { name: 'Checkout' });

      expect(checkoutHeadingElement).toBeInTheDocument();
    });

    it('should show the current step heading with "Shipping address" text', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Shipping address' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when required inputs are blank', () => {
    it('should disable the Next button in the Address Form', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      const nextStepButton = screen.getByRole('button', { name: 'Next' });

      expect(nextStepButton).toBeDisabled();
    });

    it('should disable the Next button in the Payment Form', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const firstNextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(firstNextStepButton);

      const secondNextStepButton = screen.getByRole('button', { name: 'Next' });

      expect(secondNextStepButton).toBeDisabled();
    });
  });


  describe('when inputs are filled and Next button is clicked one time', () => {
    it('should show the current step heading with "Payment method" text', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Payment method' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when inputs are filled and Next button is clicked two times', () => {
    it('should show the current step heading with "Order summary" text', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const firstNextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(firstNextStepButton);

      fillPaymentForm();

      const secondNextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(secondNextStepButton);

      const stepHeadingElement = screen.getByRole('heading', { name: 'Order summary' });

      expect(stepHeadingElement).toBeInTheDocument();
    });
  });

  describe('when an option is selected', () => {
    it('should show the selected country in the field', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      const selectCountryElement = screen.getByRole('button', { name: /country ​/i });
      userEvent.click(selectCountryElement);

      const optionCountryElement = screen.getByRole('option', { name: /brazil/i });
      userEvent.click(optionCountryElement);

      const selectedCountryElement = screen.getByRole('button', { name: /country brazil/i });

      expect(selectedCountryElement).toBeInTheDocument();
    });

    it('should show the selected state in the field', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

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

  describe('when Back button is clicked to return to "Shipping address" step', () => {
    it('should keep the first name input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const firstNameElement = screen.getByRole('textbox', { name: /first name/i });

      expect(firstNameElement.value).toBe("John");
    });

    it('should keep the last name input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const lastNameElement = screen.getByRole('textbox', { name: /last name/i });

      expect(lastNameElement.value).toBe("Doe");
    });

    it('should keep the address line 1 input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const address1Element = screen.getByRole('textbox', { name: /address line 1/i });

      expect(address1Element.value).toBe("My address1");
    });

    it('should keep the address line 2 input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const address2Element = screen.getByRole('textbox', { name: /address line 2/i });

      expect(address2Element.value).toBe("My address2");
    });

    it('should keep the zip code input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const zipCodeElement = screen.getByRole('textbox', { name: /zip \/ postal code/i });

      expect(zipCodeElement.value).toBe("123456");
    });

    it('should keep the city input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const cityElement = screen.getByRole('textbox', { name: /city/i });

      expect(cityElement.value).toBe("Test Land");
    });

    it('should keep the country selected', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const selectedCountryElement = screen.getByRole('button', { name: /country brazil/i });

      expect(selectedCountryElement).toBeInTheDocument();
    });

    it('should keep the state/province/region selected', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();
      clickNextAndBackButton();

      const selectedStateElement = screen.getByRole('button', { name: /state\/province\/region goias/i });

      expect(selectedStateElement).toBeInTheDocument();
    });
  });

  describe('when Back button is clicked to return to "Payment method" step', () => {
    it('should keep the name on card input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      fillPaymentForm();

      clickNextAndBackButton();

      const nameOnCardElement = screen.getByRole('textbox', { name: /name on card/i });

      expect(nameOnCardElement.value).toBe("John Doe");
    });

    it('should keep the card number input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      fillPaymentForm();

      clickNextAndBackButton();

      const cardNumberElement = screen.getByRole('textbox', { name: /card number/i });

      expect(cardNumberElement.value).toBe("1234567887654321");
    });

    it('should keep the expiry date input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      fillPaymentForm();

      clickNextAndBackButton();

      const expiryDateElement = screen.getByRole('textbox', { name: /expiry date/i });

      expect(expiryDateElement.value).toBe("31/12/2200");
    });

    it('should keep the cvv input filled', () => {
      render(<ThemeProvider theme={theme}><Checkout /></ThemeProvider>);

      fillAddressForm();

      const nextStepButton = screen.getByRole('button', { name: 'Next' });
      userEvent.click(nextStepButton);

      fillPaymentForm();

      clickNextAndBackButton();

      const cvvElement = screen.getByRole('textbox', { name: /cvv/i });

      expect(cvvElement.value).toBe("321");
    });
  });
});
