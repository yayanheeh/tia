import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
  <Box bgcolor="text.secondary" color="background.paper" p={2}>
         <Grid container spacing={1}>
        
        <Grid item xs={3}>
          Doc  </Grid>
        <Grid item xs={3}>
          Blog   </Grid>
        <Grid item xs={3}>
          Social media </Grid>
        <Grid item xs={3}>
          Kontak  </Grid>
      </Grid></Box>
    </div>
  );
}
