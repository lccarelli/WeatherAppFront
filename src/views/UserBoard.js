import React from 'react';
import axios from 'axios';
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
    // console.log(this.props.match.params.nombre);
    // axios.get('/getUsers/'+this.props.match.params.nombre).then((payload) => {
    //   console.log('entro');
    //   console.log(payload.data.usuario.locations);
    //   let cities = [];
    //   if (payload.data.usuario.locations){
    //     cities = this.payload.data.usuario.locations.map((currentValue, index, array) => {
    //       return(<div key={index} locations={currentValue.locations}/>)
    //     })
    //   }
    //   debugger;
    // }).catch((err) => {
    //   // console.log(err);
    // });

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


export default Boards;
