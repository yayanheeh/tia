import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '500px',
    border: 0
  }
});

class OrdersTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      
        <div className={classes.root}>
        <Paper>
            className={classes.iframe}
            src="https://mbaktia.netlify.com/table"
            title="Material Design icons"
          />
          </Paper>
        </div>
      
    );
  }
}

OrdersTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrdersTable);
