import React from 'react';
import axios from 'axios';

import LocationListHomeContainer from '../../containers/LocationListHomeContainer';


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
  constructor(){
    super();
  }

  render() {

    return (
      <div>
            <LocationListHomeContainer cities={cities}/>
      </div>
    );
  }
}


export default Home;
