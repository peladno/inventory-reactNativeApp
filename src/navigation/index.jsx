import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.token);
  const userId2 = useSelector((state) => state.auth.userId);
  console.log(userId);
  console.log(userId2);

  return <NavigationContainer>{userId ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
