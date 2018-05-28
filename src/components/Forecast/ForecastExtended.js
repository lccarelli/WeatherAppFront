import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ForecastItem from './ForecastItem';
import transformForecastExtended from '../../services/transformForecastExtended';


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

const urlBase = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '520f5e5567a4fd09ce34799b138a759b';

class ForecastExtended extends React.Component {
  constructor(props){
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.city !== this.props.city){
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {

    const urlForecast = `${urlBase}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(urlForecast).then(
      data => (data.json())
    ).then(
      forecastWeatherData => {
        console.log(forecastWeatherData);
        const forecastData = transformForecastExtended(forecastWeatherData);
        console.log(forecastData);
        this.setState({forecastData});
      }
    );
  }

  listForecastItemDay(forecastData){
    return forecastData.map( (forecast, index) =>
      (
        <ForecastItem
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
          data={forecast.data}>
        </ForecastItem>
      ));
  };

  renderProgressData = () => {
    return 'cargando ForecastExtended';
  }

  render(){
    const {forecastData} = this.state;
    return (
      <div>
        <Card className={this.props.classes.card}>
          <CardContent className={this.props.classes.content}>
            ForecastExtended {this.props.city}
            {forecastData?
              this.listForecastItemDay(forecastData):
              this.renderProgressData()
            }
          </CardContent>
        </Card>
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
}
export default withStyles(styles, { withTheme: true })(ForecastExtended);
