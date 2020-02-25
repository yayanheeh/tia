import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
// Material components
import { Grid } from '@material-ui/core';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';




// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  PublicOutlined as PublicIcon,

  SettingsOutlined as SettingsIcon
   
} from '@material-ui/icons';

// Component styles
import styles from './styles';

class Bawah extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        
<Grid
            container
            spacing={1}
          >
            <Grid
              item
              lg={3}
              sm={3}
              xl={3}
              xs={12}
            >
        <b>Docs</b><br/>
<Divider/>
 
<ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PublicIcon/>
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dokumentasi Perjalanan"
            />
          </ListItem>

</Grid>
<Grid
              item
              lg={3}
              sm={3}
              xl={3}
              xs={12}
            >
  <b> Blog</b><br/>
<Divider/>

        <List
          component="div"
          disablePadding
        >
 
<ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PublicIcon/>
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dokumentasi Perjalanan"
            />
          </ListItem></List>


</Grid>
<Grid
              item
              lg={3}
              sm={3}
              xl={3}
              xs={12}
            >
<b>Media social</b><br/>
<Divider/>
        <List
          component="div"
          disablePadding
        >
 
<ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PublicIcon/>
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dokumentasi Perjalanan"
            />
          </ListItem></List>

</Grid>

<Grid
              item
              lg={3}
              sm={3}
              xl={3}
              xs={12}
            >
<b>Kontak</b><br/>

<Divider/>

        <List
          component="div"
          disablePadding
        >
 
<ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/profil"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PublicIcon/>
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon />
            </ListItemIcon>
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
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dokumentasi Perjalanan"
            />
          </ListItem></List>

</Grid></Grid>
             <List
          component="div"
          disablePadding
        >


        </List>
        <Divider className={classes.listDivider} />
        <List
          component="div"
          disablePadding
          subheader={
            <ListSubheader className={classes.listSubheader}>
              Support
            </ListSubheader>
          }
        >
          <ListItem
            className={classes.listItem}
            component="a"
            href="https://devias.io/contact-us"
            target="_blank"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Customer support"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Bawah.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bawah);
