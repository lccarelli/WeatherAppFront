import React from 'react';
import PropTypes from 'prop-types';


const WeatherExtraInfo = (props) => {
  const humidity = props.humidity;
  const wind = props.wind;
  return (
    <div>
        <div>{`Humidity: ${humidity} %`}</div>
        <div>{`Wind: ${wind}`}</div>
    </div>
  );
}

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
