import React, { Component } from 'react';

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
    minHeight: '640px',
    border: 0
  }
});

class Icons extends Component {
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

<div>



<div class="accordion">
  <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden>
  <label class="accordion-header" for="accordion-1">
    <i class="icon icon-arrow-right mr-1"></i>
    Title
  </label>
  <div class="accordion-body">
      </div>
</div>

<div class="accordion">
  <input type="radio" id="accordion-1" name="accordion-radio" hidden>
  <label class="accordion-header" for="accordion-1">
    Title
  </label>
  <div class="accordion-body">
  
  </div>
</div>

</div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
