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
 Iframe
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

class Youtbe extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
      
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

 </Grid>
   
   
          </Grid>
          
         
     
   
        </div>


      </DashboardLayout>
    );
  }
}

Youtube.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Youtube);











