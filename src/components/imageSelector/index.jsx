import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';

function ImageSelector({ onImageSelected }) {
  const [imageUrl, setImageUrl] = useState(null);
  const onHandleTakePicture = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    console.log('image', image);

    setImageUrl(image.uri);
    onImageSelected(image.uri);
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('insufficient permissions', 'You need permisions to use the camera', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };
  return (
    <View>
      <View>
        {!imageUrl ? <Text>No image Selected</Text> : <Image source={{ uri: imageUrl }} />}
      </View>
      <TouchableOpacity onPress={onHandleTakePicture}>
        <Text>Take picture</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ImageSelector;
