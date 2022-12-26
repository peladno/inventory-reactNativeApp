import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';

import { Styles } from './styles';

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
    <View style={Styles.imageSelectorContainer}>
      <View style={Styles.imageContainer}>
        {!imageUrl ? (
          <Text>No image Selected</Text>
        ) : (
          <Image style={Styles.productImage} source={{ uri: imageUrl }} />
        )}
      </View>
      <TouchableOpacity style={Styles.photoButton} onPress={onHandleTakePicture}>
        <Text style={Styles.takePicture}>Take picture</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ImageSelector;
