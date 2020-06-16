import React from 'react';
import PropTypes from 'prop-types';

const DietaryItem = ({ type }) => (
  <span className="dietary" key={type}>
    {type}
  </span>
);

DietaryItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DietaryItem;
