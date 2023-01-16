import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';

import { Styles } from './styles';

function LocationSelector({ onLocationPicker }) {
  const [locationPicker, setLocationPicker] = useState('');

  const onHandlePermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Insufficient permissions', 'You need permisions to use the gps', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };
  const onHandleLocation = async () => {
    const isLocationPermisson = await onHandlePermissions();
    if (!isLocationPermisson) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setLocationPicker({ lat: latitude, lng: longitude });

    const { latitude, longitude } = location.coords;

    onLocationPicker({ lat: latitude, lng: longitude });
  };
  return (
    <View style={Styles.locationContainer}>
      <TouchableOpacity style={Styles.locationButton} onPress={onHandleLocation}>
        <Ionicons style={Styles.locationIcon} name="location-sharp" color="black" />
        <Text style={Styles.locationText}>Select location:</Text>
      </TouchableOpacity>
      {!locationPicker ? (
        <Text style={Styles.noLocationText}>No location selected</Text>
      ) : (
        <Text>`${locationPicker.lat}`</Text>
      )}
    </View>
  );
}

export default LocationSelector;
