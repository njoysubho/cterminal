import React,{ Component, useEffect,useState,setData } from 'react';
import { ReactTinyLink} from 'react-tiny-link'
import logo from './logo.svg';
import logoBlack from './images/logo_black_icon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import NavMenu from './Menu';
import Stats from './Stats';
import News from './News';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//images

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

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


export default function NewsAggregator() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [data, setData] = useState([]);
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
        <Stats />
    );
 

}



//export default App;
