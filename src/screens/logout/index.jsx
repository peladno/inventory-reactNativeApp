import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeToken } from '../../store/auth.slice';
import { Styles } from './styles';

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
    <View style={Styles.logoutContainer}>
      <Ionicons name="log-out-outline" color="black" style={Styles.icon} />
      <Text style={Styles.subTitle}>You wanna logout?, We are gonna miss you :(</Text>
      <TouchableOpacity onPress={logout} style={Styles.logoutButton}>
        <Text style={Styles.logoutText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Config;
