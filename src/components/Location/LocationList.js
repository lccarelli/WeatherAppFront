import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WeatherLocation';


const LocationList = ({cities, onSelectedLocation}) => {

  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    //le cambio el nombre a la funcion para que cuando disparo hacia arriba no me confunda
    onSelectedLocation(city);
  };

  const strToComponent = cities => (
    cities.map((city, index) =>
        (
          <WeatherLocation
            key={index}
            city={city}
            onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
          />
        ))
      );
  return (
    <div>
      {strToComponent(cities)}
    </div>
  );
}


LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;