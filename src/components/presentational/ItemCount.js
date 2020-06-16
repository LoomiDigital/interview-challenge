import React from 'react';
import PropTypes from 'prop-types';

const ItemCount = ({ menuItemCount }) => (
  <div className="col-6 menu-summary-left">
    <span>{`${menuItemCount} items`}</span>
  </div>
);

ItemCount.propTypes = {
  menuItemCount: PropTypes.number.isRequired,
};

export default ItemCount;
