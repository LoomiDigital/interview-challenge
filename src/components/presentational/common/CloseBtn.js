import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = ({ id, removeItem }) => (
  <button className="remove-item" onClick={() => removeItem(id)} type="button">
    x
  </button>
);

CloseBtn.propTypes = {
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CloseBtn;
