import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Search } from '../screens';
import Dashboard from './dashboard';
import InventoryNavigator from './inventory';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Invetorytab" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="InventoryTab"
        component={InventoryNavigator}
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={25} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
