import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocationListHomeContainer from '../containers/LocationListHomeContainer';


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
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    // alert(this.props.nombre);
    this.setState({isRedirected:true});
  }

  render() {
    // const {nombre} = this.props;
    const nombre = 'laura';
    if(this.state.isRedirected){
      return(<Redirect to={'/boards/'+ nombre }/>);
    }

    return (
      <div className="fondo-home">
        <div className="username">{`Usuario: ${nombre}`}</div>
          <div className="home-title">weatherApp</div>
              <div className="board-button-container">
                <button className="board-button" onClick={this.onClick}>MI BOARD</button>
              </div>
          <LocationListHomeContainer cities={cities}/>
      </div>
    );
  }
}


export default Home;
