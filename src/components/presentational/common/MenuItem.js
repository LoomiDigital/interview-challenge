import React from 'react';
import PropTypes from 'prop-types';
import CloseBtn from './CloseBtn';
import DietaryItem from './DietaryItem';

const MenuItem = ({ item, addItem, removeItem, closeButton }) => (
  <li
    className="item"
    {...(addItem ? { onClick: () => addItem(item.id) } : '')}>
    <h2>{item.name}</h2>
    <p>
      {item.dietaries.map(dietaryItem => (
        <DietaryItem type={dietaryItem} key={dietaryItem} />
      ))}
    </p>
    {closeButton && <CloseBtn removeItem={removeItem} id={item.id} />}
  </li>
);

MenuItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number])
  ).isRequired,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  closeButton: PropTypes.bool,
};

MenuItem.defaultProps = {
  addItem: null,
  removeItem: null,
  closeButton: false,
};

export default MenuItem;
