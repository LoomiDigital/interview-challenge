import React from 'react';
import PropTypes from 'prop-types';
import MenuSummary from '../MenuSummary';
import ItemCount from '../ItemCount';

const Header = ({ headerItems: { menuItemCount, dietaryCount } }) => (
  <div className="menu-summary">
    <div className="container">
      <div className="row">
        <ItemCount menuItemCount={menuItemCount} />
        <MenuSummary dietaryCount={dietaryCount} />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  headerItems: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
};

export default Header;
