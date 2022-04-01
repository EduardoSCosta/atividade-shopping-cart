import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Input, Text } from '../../components';

export default function PaymentForm({ formValues, onFormChange }) {
  return (
    <React.Fragment>
      <Text variant="h4" gutterBottom>
        Payment method
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={formValues.nameOnCard}
            onChange={event => onFormChange('nameOnCard', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formValues.cardNumber}
            onChange={event => onFormChange('cardNumber', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={formValues.expiryDate}
            onChange={event => onFormChange('expiryDate', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={formValues.cvv}
            onChange={event => onFormChange('cvv', event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveCard"
                value="yes"
                checked={formValues.rememberCard}
                onChange={() => onFormChange('rememberCard', !formValues.rememberCard)}
              />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
