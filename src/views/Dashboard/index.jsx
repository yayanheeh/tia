import React, { Component } from 'react';

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
        <Budget className={classes.item} />
        
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
              
              
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <Progress className={classes.item} />
            
                          </Grid>
   
   <Grid
              item
            md={4}
              xs={12}
            >
              
              
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
               
              <Profit className={classes.item} />
            </Grid>
   
   
   <Grid
              item
            md={4}
              xs={12}
            >
              
              
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <SalesChart className={classes.item} />
               </Grid>
   
   
   
            <Grid
              item
            md={4}
              xs={12}
            >
              
              
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <DevicesChart className={classes.item} />
                  </Grid>
            <Grid
              item
            md={4}
              xs={12}
            >
              
              
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
                 <ProductList className={classes.item} />
                </Grid>
            
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
