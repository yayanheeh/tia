import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowDownward as ArrowDownwardIcon,
  Money as MoneyIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class Budget extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      
              <div className={classes.root}>
      
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_1280.jpg"
          title="Contemplative Reptile"
        />
        
    </div> 
        
      
    );
  }
}

Budget.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Budget);
