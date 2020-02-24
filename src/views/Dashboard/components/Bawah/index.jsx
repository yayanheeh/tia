import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


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
  <Box bgcolor="text.secondary" color="#eceff1" p={2}>
         <Grid container spacing={1}>
        
        <Grid item xs={3}>
          Doc <Divider/> </Grid>
        <Grid item xs={3}>
          Blog <Divider/>   </Grid>
        <Grid item xs={3}>
          Social media<Divider/>  </Grid>
        <Grid item xs={3}>
          Kontak<Divider/>   </Grid>
      </Grid></Box>
    </div>
  );
}
