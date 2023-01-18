import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors';
import { saveItem } from '../../store/item.slice';
import { isAndroid } from '../../utils/index';
import { ImageSelector, LocationSelector } from '../index';
import { Styles } from './styles';

function AddProductForm() {
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState(null);
  const [image, setImage] = useState('');
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(saveItem({ name, image, quantity, coords }));
  };

  const onImageSelected = (uri) => {
    setImage(uri);
  };

  const onLocationPicker = (location) => {
    setCoords(location);
  };

  return (
    <KeyboardAvoidingView
      style={Styles.keyboardContainer}
      behavior={isAndroid ? 'height' : 'padding'}
      enabled>
      <SafeAreaView style={Styles.formContainer}>
        <ImageSelector onImageSelected={onImageSelected} />
        <LocationSelector onLocationPicker={onLocationPicker} />
        <View style={Styles.inputContainer}>
          <Text style={Styles.placeHolder}>Quantity</Text>
          <TextInput
            style={Styles.inputText}
            placeholderTextColor={COLORS.darkGray}
            keyboardType={isAndroid ? 'numeric' : 'number-pad'}
            autoCorrect={false}
            value={quantity}
            maxLength={5}
            onChangeText={(text) => setQuantity(text)}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.placeHolder}>Item name</Text>
          <TextInput
            style={Styles.inputText}
            placeholderTextColor={COLORS.darkGray}
            autoCorrect={false}
            maxLength={25}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <TouchableOpacity style={Styles.addItemButton} onPress={onHandleSubmit}>
          <Text style={Styles.saveText}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default AddProductForm;
