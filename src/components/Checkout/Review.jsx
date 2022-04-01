import * as React from 'react';
import css from '@styled-system/css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Text } from '../../components';

export default function Review({ formValues, cartItems }) {
  const lastFourCardNumbers = `XXXX-XXXX-XXXX-${formValues.cardNumber.slice(-4)}`;

  return (
    <React.Fragment>
      <Text variant="h4" gutterBottom>
        Order summary
      </Text>
      <List disablePadding>
        {cartItems && cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Text variant="p" css={css({ fontWeight: '700' })}>
            Free
          </Text>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Text variant="h5" gutterBottom css={css({ marginTop: '2px' })}>
            Shipping
          </Text>
          <Text variant="p" as="p" gutterBottom>{formValues.firstName} {formValues.lastName}</Text>
          <Text variant="p" as="p" gutterBottom>{formValues.address1}, {formValues.address2}</Text>
          <Text variant="p" as="p" gutterBottom>{formValues.zipCode}, {formValues.city}</Text>
          <Text variant="p" as="p" gutterBottom>{formValues.country}, {formValues.region}</Text>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Text variant="h5" gutterBottom css={css({ marginTop: '2px' })}>
            Payment details
          </Text>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Text variant="p" as="p" gutterBottom>{formValues.nameOnCard}</Text>
              </Grid>
              <Grid item xs={6}>
                <Text variant="p" as="p" gutterBottom>{lastFourCardNumbers}</Text>
              </Grid>
              <Grid item xs={6}>
                <Text variant="p" as="p" gutterBottom>{formValues.expiryDate}</Text>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
