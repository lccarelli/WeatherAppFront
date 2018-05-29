import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import ButtonAppBar from './components/AppNavBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';


const cities = [
  'Buenos Aires,AR',
  'New York,US',
  'Moscow, US',
  'Berlin, US',
  'Madrid,ES',
  'Bogota,COL',
  'Toki,JP'
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <LocationListContainer cities={cities}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ForecastExtendedContainer/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
