import React, { Component,PureComponent } from 'react';

import ReactDOM from "react-dom"
import Iframe from "./iframe.js"

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { Notifications, Password } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Youtube extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Youtube">
        <div className={classes.root}>
         <Iframe
				url="http://www.youtube.com/embed/xDMP3i36naA"
				width="450px"
				height="450px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				allowFullScreen
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




