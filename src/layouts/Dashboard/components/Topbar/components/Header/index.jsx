import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      
      <Tab label='Home'>
  <Link to='/dashboard'/>
</Tab>
        <Tab label='Tentang kami'>
  <Link to='/dashboard'/>
</Tab>
      <Tab label='Visi misi'>
  <Link to='/visimisi'/>
        <Tab label='Hubungi kami'>
  <Link to='/profil'/>
</Tab>
</Tab>
      </Tabs>
    
  );
}
