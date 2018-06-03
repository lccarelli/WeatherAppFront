import React from 'react';
import Header from './Header';
import Home from './../../views/Home';

const FullContainer = ({header, body}) => {
    return (
      <div>
        <Header title={header}/>
        <div>{body}</div>
        <div>footer</div>
      </div>
  );
};

FullContainer.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropType.element.isRequired,
};

export default FullContainer;
