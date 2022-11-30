import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import InventoryNavigator from './inventory';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <InventoryNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
