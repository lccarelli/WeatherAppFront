import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import FavButton from '../FavButton/FavButton';

const styles = theme => ({
  root: {
    width: '100%',
  },
  colorFont:{
    color: '#cfd8dc',
  },
  button: {
    margin: theme.spacing.unit,
    height: 60,
    width: 60
  },
});


const WeatherLocationHome =({classes, city, data}) => (

    <div className={classes.root}>
      <List className={classes.colorFont}>
        <ListItem>
          <Grid container spacing={8}>
          <Grid item xs={6} sm={6}>
                <Location city={city}/>
          </Grid>
          <Grid item xs={5} sm={5}>
              {data ? <WeatherData data={data}/> : 'Cargando...'}
          </Grid>
          <Grid item xs={1} sm={1} className="FavButton">
              <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                <Icon>favorite</Icon>
              </IconButton>
          </Grid>
          </Grid>
        </ListItem>
        <Divider />
      </List>
    </div>
);

WeatherLocationHome.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default withStyles(styles, { withTheme: true })(WeatherLocationHome);
