import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocationListContainer from './../containers/LocationListContainer';
import ForecastExtendedContainer from './../containers/ForecastExtendedContainer';


const cities = [
  'Buenos Aires,AR',
  'New York,US',
  'Moscow, US',
  'Berlin, US',
  'Madrid,ES',
  'Bogota,COL',
  'Toki,JP'
];

class Home extends React.Component {

  render() {
    return (
      <div>
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


export default Home;
