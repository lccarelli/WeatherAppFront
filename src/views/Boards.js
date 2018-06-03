import React from 'react';



class Boards extends React.Component {



  render() {
    console.log(this.props);
    return(
      <div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsers
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Boards);
