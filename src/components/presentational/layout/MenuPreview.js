import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../common/MenuItem';

const MenuPreview = ({ selectedItems, removeItem }) => (
  <Fragment>
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {selectedItems.map(item => (
        <MenuItem item={item} removeItem={removeItem} key={item} closeButton />
      ))}
    </ul>
  </Fragment>
);

MenuPreview.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default MenuPreview;
