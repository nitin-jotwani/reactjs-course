import React from 'react';
import Classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
  <ul className={Classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Buildder</NavigationItem>
    <NavigationItem link="/" >Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
