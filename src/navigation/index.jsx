import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  return <NavigationContainer>{auth ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
