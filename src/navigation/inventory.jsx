import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home, Categories, Products } from '../screens';

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
