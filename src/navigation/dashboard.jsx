import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Dashboard } from '../screens';

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
