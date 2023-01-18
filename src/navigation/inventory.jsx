import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ProductDetail } from '../components/index';
import { Categories, Products } from '../screens';

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
