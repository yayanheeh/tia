import React, { Component } from 'react';



// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';





// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
class Icons extends Component{
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
          
          
          
          
        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
