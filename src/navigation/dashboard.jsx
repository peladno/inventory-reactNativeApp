import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Dashboard } from '../screens';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
