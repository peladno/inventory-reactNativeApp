import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return <NavigationContainer>{token ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
