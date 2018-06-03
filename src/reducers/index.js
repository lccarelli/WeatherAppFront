import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {getUsers} from './users';
import { initial } from './initial'
import {city} from './city';
import {cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeathercities} from './cities';


export default combineReducers({
    initial,
    getUsers,
    city,
    cities
});


export const getCity = createSelector( state => state.city, city => city );

export const getForecastDataFromCities =
  createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities =
  createSelector(state => state.cities, _getWeathercities);
