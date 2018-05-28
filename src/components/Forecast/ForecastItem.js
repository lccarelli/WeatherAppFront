import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import WeatherData from '../WeatherData';




const ForecastItem = ({weekDay, hour, data}) => (
  <div>
    <Typography>
      {weekDay} Hora:{hour}hs
    </Typography>
    <WeatherData data={data}></WeatherData>
    <Divider />
  </div>
);


ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}
export default ForecastItem;
