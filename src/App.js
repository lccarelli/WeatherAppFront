import React from 'react';
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css';
import AppHeader from './components/FullContainer/AppHeader';
import Home from './views/Home';


class App extends React.Component {

  render() {
    return (
      <div>
        <AppHeader/>
        <Router history={ this.props.history }>
        <div>
          <Route exact path="/" component={ Home }/>
          {/* Here you can put more routes on */}
        </div>
      </Router>

      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
