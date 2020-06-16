import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Menu from './Menu';
import MenuPreview from './MenuPreview';

const Layout = ({
  menuItems,
  selectedItems,
  addItem,
  removeItem,
  headerItems,
}) => (
  <div className="wrapper">
    <Header headerItems={headerItems} />
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <Menu menuItems={menuItems} addItem={addItem} />
        </div>
        <div className="col-8">
          <MenuPreview selectedItems={selectedItems} removeItem={removeItem} />
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  headerItems: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
};

export default Layout;
