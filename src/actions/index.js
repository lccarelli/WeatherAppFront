import axios from 'axios';
import transformForecastExtended from './../services/transformForecastExtended';
import transformWeather from './../services/transformWeather';


//USERS
export const START_GET_USERS = 'START_GET_USERS';
export const COMPLETE_GET_USERS = 'COMPLETE_GET_USERS';
export const ERROR_GET_USERS = 'ERROR_GET_USERS';

const startGetUsers = payload => ({ type: START_GET_USERS, payload });
const completeGetUsers = payload => ({ type: COMPLETE_GET_USERS, payload });
const errorGetUsers = payload => ({ type: ERROR_GET_USERS, payload });

export const getUsers = () => {
  return (dispatch, getstate) => {
      dispatch(startGetUsers());
      console.log('se llamo a la accion de get user');
      axios.get('/getUsers').then((response) => {
        if(response.data)dispatch(completeGetUsers(response.data.usuarios));
      }).catch((err) => {
          dispatch(errorGetUsers(err));
      })
  }
}


//CITY

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '520f5e5567a4fd09ce34799b138a759b';

export const setSelectedCity = payload => {
  return (dispatch, getState) => {

      const apiForecast = `${urlForecast}?q=${payload}&appid=${apiKey}&units=metric`;

      //accion inicial, activa en el estado un indicador de busqueda de datos
      dispatch(setCity(payload));

      // chequea el date en que se hace el fetch y si fue dentro del minuto no vuelve a realizarlo
      const state = getState();
      const date = state.cities[payload] && state.cities[payload].forecastDataDate;
      const now = new Date();

      if( date && (now - date) < 60000){
        return;
      }

      return fetch(apiForecast).then(
        data => (data.json())
      ).then(
        forecastWeatherData => {
          const forecastData = transformForecastExtended(forecastWeatherData);
          //modificar el estado con el resultado de la promise
          dispatch(setForecastData({city: payload, forecastData}));
        }
      );
  };
};

export const setWeather = payload => {
  return (dispatch, getState) => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city))
      const apiWeather = `${urlWeather}?q=${city}&appid=${apiKey}&units=metric`;

      const state = getState();
      const date = state.city[payload] && state.city[payload].weatherDate;
      const now = new Date();

      if( date && (now - date) < 60000){
        return;
      }

      fetch(apiWeather).then( data => {
        return data.json();
      }).then( weatherdata => {
        const weather = transformWeather(weatherdata);
        dispatch(setWeatherCity({city, weather}));
      });
    });
  }
}
