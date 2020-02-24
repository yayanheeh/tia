import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, NavLink } from 'react-router-dom';


// Component styles
import styles from './styles';





export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
     
          <Grid container spacing={1}>
        
        <Grid item xs={3}><br/>
          Doc<Divider/> <br/><b>
            <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Home"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Profil"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/visimisi"
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Visimisi"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/paketumroh"
          >
            
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Paket Umroh"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/Dokumentasi"
          >
            
            
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dokumentasi Perjalanan"
            />
          </ListItem></b>

           </Grid>
        <Grid item xs={3}><br/>
          Blog <Divider/> 
              <br/>
              </Grid>
        <Grid item xs={3}><br/>
          Social media<Divider/> <br/> </Grid>
        <Grid item xs={3}><br/>
          Kontak<Divider/>  <br/> </Grid>
          </Grid></Box></div>
    </div>
  );
}
