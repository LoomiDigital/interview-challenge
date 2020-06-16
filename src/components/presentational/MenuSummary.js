import React from 'react';
import PropTypes from 'prop-types';

const MenuSummary = ({ dietaryCount }) => (
  <div className="col-6 menu-summary-right">
    {Object.keys(dietaryCount).map(type => (
      <span key={type}>
        {dietaryCount[type]}x <span className="dietary">{type}</span>
      </span>
    ))}
  </div>
);

MenuSummary.propTypes = {
  dietaryCount: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default MenuSummary;
