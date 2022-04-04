import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({ formValues, cartItems }) {
  const lastFourCardNumbers = `XXXX-XXXX-XXXX-${formValues.cardNumber.slice(-4)}`;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems && cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Free
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{formValues.firstName} {formValues.lastName}</Typography>
          <Typography gutterBottom>{formValues.address1}, {formValues.address2}</Typography>
          <Typography gutterBottom>{formValues.zipCode}, {formValues.city}</Typography>
          <Typography gutterBottom>{formValues.country}, {formValues.region}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.nameOnCard}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{lastFourCardNumbers}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.expiryDate}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
