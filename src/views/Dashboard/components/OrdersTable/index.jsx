import React, { Component } from 'react';

// Component styles
import styles from './styles';

import { Dashboard as DashboardLayout } from 'layouts';



class OrdersTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
          tessting
        </div>
      </DashboardLayout>
    );
  }
}

OrdersTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrdersTable);
