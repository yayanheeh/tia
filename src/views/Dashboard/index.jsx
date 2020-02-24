import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';

              
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  Budget,
  Users,
  Progress,
  Profit,
  SalesChart,
  DevicesChart,
  ProductList,
  Tiket,
  Promo,
  Bawah,
  OrdersTable
} from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
      <Hidden smDown>  <Budget className={classes.item} />
        </Hidden>
        <div className={classes.root}>
         

 <Grid
            container
            spacing={3}
          >

            
            <Grid
              item
              md={4}
              xs={12}
            >
                  <OrdersTable className={classes.item} />
         

 </Grid>
   <Grid
              item
              md={4}
              xs={12}
            >
                  <Tiket className={classes.item} />
         

 </Grid>       
<Grid
              item
              md={4}
              xs={12}
            >
                  <Promo className={classes.item} />
         

 </Grid>       

   
   
   
   <Grid
              item
              md={4}
              xs={12}
            >
                  <OrdersTable className={classes.item} />
         

 </Grid>
   <Grid
              item
              md={4}
              xs={12}
            >
                  <Tiket className={classes.item} />
         

 </Grid>       
<Grid
              item
              md={4}
              xs={12}
            >
                  <Promo className={classes.item} />
         

 </Grid>       

   
   
          </Grid>
          
         
     
   
        </div>
<br/><br/><br/>

<Bawah className={classes.item} />

      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
