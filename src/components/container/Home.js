import React, { PureComponent } from 'react';

import Layout from '../presentational/layout/Layout';
import items from '../../items';
import {
  addDietaryCount,
  removeDietaryCount,
  add,
  remove,
  added,
} from '../../utils';

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      menuItems: [],
      menuItemCount: 0,
      dietaryCount: {},
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.setState({ menuItems: items });
  }

  addItem(id) {
    const {
      menuItems,
      selectedItems,
      dietaryCount,
      menuItemCount,
    } = this.state;

    const updateItems = add(menuItems, id);
    const updateDietary = addDietaryCount(updateItems[0], dietaryCount);

    if (added(selectedItems, id)) {
      return;
    }

    this.setState({
      selectedItems: [...selectedItems, ...updateItems],
      dietaryCount: { ...dietaryCount, ...updateDietary },
      menuItemCount: menuItemCount + 1 || 1,
    });
  }

  removeItem(id) {
    const { selectedItems, dietaryCount, menuItemCount } = this.state;
    const updateItems = remove(selectedItems, id);
    const updateDietary = removeDietaryCount(selectedItems, id, dietaryCount);

    this.setState({
      selectedItems: updateItems,
      dietaryCount: updateDietary,
      menuItemCount: menuItemCount - 1 || 0,
    });
  }

  render() {
    const {
      menuItems,
      selectedItems,
      dietaryCount,
      menuItemCount,
    } = this.state;

    return (
      <Layout
        menuItems={menuItems}
        selectedItems={selectedItems}
        addItem={this.addItem}
        removeItem={this.removeItem}
        headerItems={{ menuItemCount, dietaryCount }}
      />
    );
  }
}

export default Home;
