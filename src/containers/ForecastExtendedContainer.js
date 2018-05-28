import React from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/Forecast/ForecastExtended';

class ForecastExtendedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ForecastExtended city={this.props.city}/>
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.func.isRequired,
};

export default ForecastExtendedContainer;
