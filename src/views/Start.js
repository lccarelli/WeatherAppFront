import React from 'react';
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
  }
  componentDidMount(){
    // this.props.getUsers();

  };

  render() {

    return (
      <div className="fondo-home">

          <div className="home-title">weatherApp</div>
            <div className="form-account">
              <div className="container-account">
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="Ingresa tu usuario" />
                  </Grid>
                </Grid>
                <div className="board-button-container">
                  <button className="board-button">MI BOARD</button>
                </div>
              </div>
            </div>
      </div>
    );
  }
}


export default Start;
