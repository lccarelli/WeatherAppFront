import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import FavButton from '../FavButton/FavButton';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});


const WeatherLocationHome =({classes, city, data}) => (

    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <Location city={city}/>
          {data ? <WeatherData data={data}/> : 'Cargando...'}
          <FavButton></FavButton>
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
