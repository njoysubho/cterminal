import React,{ Component, useEffect,useState,setData } from 'react';
import ReactDom from 'react-dom';
import Microlink from '@microlink/react'
import { Carousel,CarouselItem } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

export default function NewsAggregator() {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
      <div>
  
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="bg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh'
        ,marginLeft:"70%",marginRight:"-2%",marginTop:"5%"}}> 
        <div class="card">
        <div class="card-body">
          {data.map((item) =>(

            <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2"><Microlink url={item.link} />
              </h6>
            </div>
          </div>
          ))} 
        </div>
      </div>
      </Typography>
      </Container>
    </React.Fragment>
      </div>
    );
  /*componentDidMount() {
    fetch('http://localhost:3000/climate-feed')
   .then(res => res.json())
    .then((data) => {
      this.setState({ news: data })
    })
    .catch(console.log)
  }*/

}

//export default App;
