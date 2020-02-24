import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    paperContainer: { 
        height: 300,
        width: 1000,
        backgroundImage: `url(${"https://tiedinmedia.com/wp-content/uploads/2017/01/background-footer-dean.jpg"})`
    }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
     
          <Grid container spacing={1}>
        
        <Grid item xs={3}>
          Doc <Divider/> 
            <ListItem button component={Link} to="/">
          Profil
        </ListItem>
           <ListItem button component={Link} to="/">
          Paket umroh
        </ListItem>
          
          <ListItem button component={Link} to="/">
          Syarat umroh
        </ListItem>
           <ListItem button component={Link} to="/">
          Dokumen perjalanan
        </ListItem>
           
           </Grid>
        <Grid item xs={3}>
          Blog <Divider/>   </Grid>
        <Grid item xs={3}>
          Social media<Divider/>  </Grid>
        <Grid item xs={3}>
          Kontak<Divider/>   </Grid>
          </Grid></Box></div>
    </div>
  );
}
