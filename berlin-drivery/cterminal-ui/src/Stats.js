import React,{ Component, useEffect,useState,setData } from 'react';
import NavMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import spiral from './images/CarbonBudgetSpiral_small2.gif'
import concspiral from './images/ConcentrationSpiral_small2.gif'
import tempspiral from './images/TemperatureSpiral_small2.gif'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '90.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function StatsAggregatorPage() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
      return (
        <div>  
          <NavMenu />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
            <Grid container spacing={spacing} justify="center">
            <Grid key={0} item>
              <Card className={classes.card}>
              <CardHeader
        title="Carbon Budget"
      />
                  <CardMedia
                      className={classes.media}
                      image={spiral}
                      title="Co2 Spiral">
                  </CardMedia>
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      See the <a href="http://openclimatedata.net/climate-spirals/">full list of spiral variants</a>
                       - Background, Videos, and GIFs
        Original Climate Spiral by <a href="https://twitter.com/ed_hawkins">Ed Hawkins</a> (<a href="http://www.climate-lab-book.ac.uk/spirals/">
          Climate Lab Book</a>),
        extended with Carbon Budget and Concentration Spiral by
        <a href="https://www.pik-potsdam.de/members/gieseke">Robert Gieseke</a> and <a href="https://twitter.com/meinshausen">
          Malte Meinshausen </a>
        (<a href="https://www.pik-potsdam.de/research/climate-impacts-and-vulnerabilities/research/rd2-flagship-projects/primap/primap">
        PRIMAP Group</a>, <a href="https://pik-potsdam.de/">Potsdam Institute for Climate Impact Research, Germany</a> &
        <a href="http://www.climate-energy-college.net/">Australian-German Climate & Energy College</a>,
        <a href="http://www.climate-energy-college.net/"> The University of Melbourne, Australia) </a>
        <a href="http://openclimatedata.net/climate-spirals/data-processing.html">Data Processing</a> · <a href="https://github.com/openclimatedata/climate-spirals">
          Source Code"</a>
                      </Typography>
                 </CardContent>
                
              </Card>
</Grid>
<Grid key={1} item>
              <Card className={classes.card}>
              <CardHeader
        title="CO2 Concentration" justify="center"
      />
                  <CardMedia
                      className={classes.media}
                      image={concspiral}
                      title="O2 Concentration">
                  </CardMedia>
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      See the <a href="http://openclimatedata.net/climate-spirals/">full list of spiral variants</a>
                       - Background, Videos, and GIFs
        Original Climate Spiral by <a href="https://twitter.com/ed_hawkins">Ed Hawkins</a> (<a href="http://www.climate-lab-book.ac.uk/spirals/">
          Climate Lab Book</a>),
        extended with Carbon Budget and Concentration Spiral by
        <a href="https://www.pik-potsdam.de/members/gieseke">Robert Gieseke</a> and <a href="https://twitter.com/meinshausen">
          Malte Meinshausen </a>
        (<a href="https://www.pik-potsdam.de/research/climate-impacts-and-vulnerabilities/research/rd2-flagship-projects/primap/primap">
        PRIMAP Group</a>, <a href="https://pik-potsdam.de/">Potsdam Institute for Climate Impact Research, Germany</a> &
        <a href="http://www.climate-energy-college.net/">Australian-German Climate & Energy College</a>,
        <a href="http://www.climate-energy-college.net/"> The University of Melbourne, Australia) </a>
        <a href="http://openclimatedata.net/climate-spirals/data-processing.html">Data Processing</a> · <a href="https://github.com/openclimatedata/climate-spirals">
          Source Code"</a>
                      </Typography>
                 </CardContent>
                
              </Card>
              </Grid>

              <Grid key={2} item>
              <Card className={classes.card}>
              <CardHeader
        title="Temparature Spiral" justify="center"
      />
                  <CardMedia
                      className={classes.media}
                      image={tempspiral}
                      title="Temparature Spiral">
                  </CardMedia>
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      See the <a href="http://openclimatedata.net/climate-spirals/">full list of spiral variants</a>
                       - Background, Videos, and GIFs
        Original Climate Spiral by <a href="https://twitter.com/ed_hawkins">Ed Hawkins</a> (<a href="http://www.climate-lab-book.ac.uk/spirals/">
          Climate Lab Book</a>),
        extended with Carbon Budget and Concentration Spiral by
        <a href="https://www.pik-potsdam.de/members/gieseke">Robert Gieseke</a> and <a href="https://twitter.com/meinshausen">
          Malte Meinshausen </a>
        (<a href="https://www.pik-potsdam.de/research/climate-impacts-and-vulnerabilities/research/rd2-flagship-projects/primap/primap">
        PRIMAP Group</a>, <a href="https://pik-potsdam.de/">Potsdam Institute for Climate Impact Research, Germany</a> &
        <a href="http://www.climate-energy-college.net/">Australian-German Climate & Energy College</a>,
        <a href="http://www.climate-energy-college.net/"> The University of Melbourne, Australia) </a>
        <a href="http://openclimatedata.net/climate-spirals/data-processing.html">Data Processing</a> · <a href="https://github.com/openclimatedata/climate-spirals">
          Source Code"</a>
                      </Typography>
                 </CardContent>
                
              </Card>
              </Grid>

              </Grid>
              </Grid>
              </Grid>
             
        </div>
      );
  }