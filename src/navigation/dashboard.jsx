import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS } from '../constants/themes/colors';
import { Config, Dashboard } from '../screens';
const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Configuration')}>
              <Ionicons name="ios-settings-outline" size={30} color={COLORS.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Configuration" component={Config} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
