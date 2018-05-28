import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import transformWeather from '../../services/transformWeather';
import FavButton from '../FavButton/FavButton';

const urlBase = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '520f5e5567a4fd09ce34799b138a759b';

// const urlBase = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
// const apiKey = '520f5e5567a4fd09ce34799b138a759b';
// nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

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

class WeatherLocation extends React.Component {
  constructor({city}) {
    super();

    this.state = {
      city,
      data:null
  }
}

componentWillMount(){
  this.handleUpdateClick();
}

  handleUpdateClick = () => {

    const apiWeather = `${urlBase}?q=${this.state.city}&appid=${apiKey}&units=metric`;
    fetch(apiWeather).then( data => {
      // console.log(data);
      return data.json();
    }).then( weatherdata => {
      const data = transformWeather(weatherdata);
      this.setState({data})
      // console.log(weatherdata);
    })
  }

  render() {
    const { onWeatherLocationClick } = this.props;
    const { data } = this.state;
    return (
      <div>
        {/* onWeatherLocationClick  es un manejador del evento donde comienza el burbujeo y lo tomamos
          de las props*/}
        <Card className={this.props.classes.card} onClick={onWeatherLocationClick}>
          <div className={this.props.classes.details}>
            <CardContent className={this.props.classes.content}>
                <Location
                  city={this.state.city}/>
              {data ? <WeatherData data={this.state.data}/> : 'Cargando...'}
            <FavButton></FavButton>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(WeatherLocation);
