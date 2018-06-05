import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { getUser } from "../actions"
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

class Start extends React.Component {
  constructor(){
    super();
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(nombre){
    this.props.getUser(nombre);
  }

  render() {


    return (
      <div className="fondo-home">

          <div className="home-title">weatherApp</div>
            <div className="form-account">
                <div className="user-button-container">
                  <button className="user-button" onClick={() => this.handleClick('laura')}>LAURA</button>
                </div>
                <div className="user-button-container">
                  <button className="user-button" onClick={this.handleClick}>JUAN PABLO</button>
                </div>


            </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUser })(Start);
