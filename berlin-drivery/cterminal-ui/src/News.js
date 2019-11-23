
import React,{ Component, useEffect,useState,setData } from 'react';
import ReactDom from 'react-dom';
import Microlink from '@microlink/react'
import { ReactTinyLink} from 'react-tiny-link'
import { Carousel,CarouselItem } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Link} from 'react-router-dom'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
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
  
export default function NewsAggregatorPage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    /*state = {
      news: [],
     
    }*/
   
     // const classes= useStyles();
     useEffect(() => {
      fetch('http://localhost:3000/climate-feed')
     .then(res => res.json())
     .then((data) => setData(data))
     .catch(console.log)
    },[]);
  
      return (
        <div>
    <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab value={0} label="Home"  {...a11yProps(0)} to='/' component={Link}/>
    <Tab value={1} label="News" value="/news" to='/news' component={Link}/>
    <Tab value={2} label="Stats" {...a11yProps(2)} value="/stats" to='/stats' component={Link} />
    <Tab value={3} label="Wiki" {...a11yProps(3)} value="/wiki" to='/wiki' component={Link} />
  </Tabs>
</AppBar>
  
          <div class="card">
          <div class="card-body">
            {data.map((item) =>(
  
              <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2">{item.link}
                </h6>
              </div>
            </div>
            ))} 
          </div>
        </div>
        </div>
      );
  }