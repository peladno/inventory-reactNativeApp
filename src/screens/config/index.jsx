import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeToken } from '../../store/auth.slice';

function Config({ navigation }) {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(removeToken());
    } catch (error) {
      throw error;
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Config;
