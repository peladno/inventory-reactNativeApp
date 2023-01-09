import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Categories, Products } from '../screens';

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
