import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../common/MenuItem';

const Menu = ({ menuItems, addItem, removeItem }) => (
  <ul className="item-picker">
    {menuItems.map(item => (
      <MenuItem
        item={item}
        addItem={addItem}
        removeItem={removeItem}
        key={item.id}
      />
    ))}
  </ul>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
};

Menu.defaultProps = {
  addItem: null,
  removeItem: null,
};

export default Menu;
