import React,{ Component, useEffect,useState,setData } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import logoBlack from './images/logo_black_icon.svg';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

function TabPanel(props) {
    const { children, value , index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function NavMenu(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
    <AppBar position="static" background="black">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <img className="nav_logo"src={logoBlack} />
            <Tab value={0} label="Home"  {...a11yProps(0)} to='/' component={Link}/>
            <Tab value={1} label="News" value="/news" to='/news' component={Link}/>
            <Tab value={2} label="Stats" {...a11yProps(2)} value="/stats" to='/stats' component={Link} />
            <Tab value={3} label="Wiki" {...a11yProps(3)} value="/wiki" to='/wiki' component={Link} />
        </Tabs>
    </AppBar>
    );
}