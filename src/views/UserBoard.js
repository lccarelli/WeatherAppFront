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

class Boards extends React.Component {
  // const cities = this.props;
  constructor(){
    super();

  }



  render() {

    const nombre = 'laura';
    return (
      <div className="fondo-home">
        <div className="username">{`Usuario: ${nombre}`}</div>
          <div className="home-title">weatherApp</div>
          <Grid container>
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


export default Boards;
