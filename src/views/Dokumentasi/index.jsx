import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Externals
import PropTypes from 'prop-types';


class Dokumentasi extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Typography">
        <div className={classes.root}>


          
<h4>Dokumen Persyaratan Umroh</h4>
            
       <Typography variant="body2" gutterBottom>
          Pas foto dengan latar belakang putih 4 x 6 sebanyak 6 lembar
</Typography>
            <Typography variant="body2" gutterBottom>
       Paspor asli yang masih berlaku dengan susunan jumlah nama 3 kata
</Typography>
  

        </div>
      </DashboardLayout>
    );
  }
}

Dokumentasi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dokumentasi);
