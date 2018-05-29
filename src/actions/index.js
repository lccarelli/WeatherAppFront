import transformForecastExtended from './../services/transformForecastExtended';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';


const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


const urlBase = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '520f5e5567a4fd09ce34799b138a759b';

export const setSelectedCity = payload => {
  return dispatch => {

      const urlForecast = `${urlBase}?q=${payload}&appid=${apiKey}&units=metric`;

      //accion inicial, activa en el estado un indicador de busqueda de datos
      dispatch(setCity(payload));

      return fetch(urlForecast).then(
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
