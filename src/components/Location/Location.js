import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import axios from 'axios';

const styles = {
  root: {
    width: '100%',
    maxWidth: 600,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};


class Location extends React.Component {

  constructor(props){
    super();
  }


  componentDidMount(){
    // console.log('culo');
    axios.post('/saveLocation',{city:this.props.city}).then((doc) => {
      // console.log(doc);
    }).catch((err) => {
      // console.log(err);
    });
  };

  render(){
    return (
      <div
        style={{
          ...styles.root,
        }}
        >
          <Typography>
            {this.props.city}
          </Typography>
        </div>
      );

  }
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default withTheme()(Location);
