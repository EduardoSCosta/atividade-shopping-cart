import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import countryAndStatesData from '../../data/countries_states.json';

export default function AddressForm({ formValues, onFormChange }) {

  const selectedCountry = countryAndStatesData.countries.find(country => country.country === formValues.country);
  const regionsList = selectedCountry?.states || [];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formValues.firstName}
            onChange={event => onFormChange('firstName', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formValues.lastName}
            onChange={event => onFormChange('lastName', event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formValues.address1}
            onChange={event => onFormChange('address1', event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={formValues.address2}
            onChange={event => onFormChange('address2', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={formValues.zipCode}
            onChange={event => onFormChange('zipCode', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={formValues.city}
            onChange={event => onFormChange('city', event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              required
              labelId="country-label"
              id="country"
              label="Country"
              value={formValues.country}
              onChange={event => onFormChange('country', event.target.value)}
            >
              {countryAndStatesData.countries.map(country => {
                return (
                  <MenuItem key={country.country} value={country.country}>{country.country}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="states-label">State/Province/Region</InputLabel>
            <Select
              labelId="states-label"
              id="states"
              label="State/Province/Region"
              value={formValues.region}
              onChange={event => onFormChange('region', event.target.value)}
            >
              {regionsList.map(state => {
                return (
                  <MenuItem key={state} value={state}>{state}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                checked={formValues.rememberAddress}
                onChange={() => onFormChange('rememberAddress', !formValues.rememberAddress)}
              />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
