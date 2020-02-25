import React, { Component, Fragment } from 'react';

import React from 'react';
import MetaTags from 'react-meta-tags';

class Component1 extends React.Component {
  render() {
    return (
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="MyApp" />
            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div class="content"> Some Content </div>
        </div>
      )
  }
}

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography as TypographyComponent } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

const variants = {
  h1: 'Nisi euismod ante senectus consequat phasellus ut',
  h2: 'Nisi euismod ante senectus consequat phasellus ut',
  h3: 'Nisi euismod ante senectus consequat phasellus ut',
  h4: 'Nisi euismod ante senectus consequat phasellus ut',
  h5: 'Nisi euismod ante senectus consequat phasellus ut',
  h6: 'Nisi euismod ante senectus consequat phasellus ut',
  subtitle1: 'Leo varius justo aptent arcu urna felis pede nisl',
  subtitle2: 'Leo varius justo aptent arcu urna felis pede nisl',
  body1:
    'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.Laoreet velit a fames commodo tristique hendrerit sociosqu rhoncus vel sapien penatibus facilisis faucibus ad. Mus purus vehicula imperdiet tempor lectus, feugiat Sapien erat viverra netus potenti mattis purus turpis. Interdum curabitur potenti tristique. Porta velit dignissim tristique ultrices primis.',
  body2:
    'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.',
  caption: 'Accumsan leo pretium conubia ullamcorper.',
  button: 'Vivamus ultrices rutrum fames dictumst'
};

class Profil extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Typography">
        <div className={classes.root}>


          <Grid
            container
            spacing={4}
          >
            {Object.keys(variants).map((key, i) => (
              <Fragment key={i}>
                <Grid
                  item
                  sm={3}
                  xs={12}
                >
                  <TypographyComponent variant="caption">
                    {key}
                  </TypographyComponent>
                </Grid>
                <Grid
                  item
                  sm={9}
                  xs={12}
                >
                  <TypographyComponent variant={key}>
                    {variants[key]}
                  </TypographyComponent>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Profil.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profil);
