import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className="pokDiv">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ averageWeight.value } { averageWeight.measurementUnit }</p>
        <img src={ image } alt={ name }/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
}

export default Pokemon;