import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import { iframe } from './components';


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
  }
  }
});

class Youtube extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
          <iframe
            className={classes.iframe}
            src="https://material.io/tools/icons/?icon=accessibility&style=outline"
            title="Material Design icons"
          />
        </div>
      </DashboardLayout>
    );
  }
}

Youtube.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Youtube);
