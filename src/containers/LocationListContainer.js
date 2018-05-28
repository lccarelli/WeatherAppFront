import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LocationList from './../components/Location/LocationList';

import {setCity} from './../actions';

class LocationListContainer extends React.Component {

  //manejador de evento
  handleSelectedLocation = city => {
    this.props.setCity(city);
  }

  render() {
      return (
        <LocationList cities={this.props.cities}
          onSelectedLocation={this.handleSelectedLocation}
          ></LocationList>
      );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
