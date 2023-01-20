import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Categories, Products, ProductDetail } from '../screens';
import { searchItem } from '../store/item.slice';

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
  const dispatch = useDispatch();

  const searchFilterFunction = (text) => {
    dispatch(searchItem(text));
  };
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={() => ({
          headerSearchBarOptions: {
            placeholder: 'Search',
            onChangeText: (event) => {
              searchFilterFunction(event.nativeEvent.text);
            },
          },
          headerTransparent: false,
        })}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
