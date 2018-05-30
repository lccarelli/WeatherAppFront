import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import FavButton from '../FavButton/FavButton';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100% !important',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },

});

const WeatherLocation =({onWeatherLocationClick, city, data, classes}) => (
      <div>
        <Card className={classes.card} onClick={onWeatherLocationClick}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
                <Location
                  city={city}/>
              {data ? <WeatherData data={data}/> : 'Cargando...'}
            <FavButton></FavButton>
            </CardContent>
          </div>
        </Card>
      </div>
);

WeatherLocation.propTypes = {
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

export default withStyles(styles, { withTheme: true })(WeatherLocation);
