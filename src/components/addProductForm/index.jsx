import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors';
import { saveItem } from '../../store/item.slice';
import { isAndroid } from '../../utils/index';
//import { ImageSelector, LocationSelector } from '../index';
import ImageSelector from '../imageSelector/index';
import LocationSelector from '../locationSelector/index';
import { Styles } from './styles';

function AddProductForm({ handleModal }) {
  const [quantity, setQuantity] = useState(null);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    if (!name || !image || !quantity || !coords || !category || !description) {
      Alert.alert('Please fill out all fields.');
    } else {
      dispatch(saveItem({ name, image, quantity, coords, category, description }));
      handleModal();
    }
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
          <Text style={Styles.placeHolder}>Name</Text>
          <TextInput
            style={Styles.inputText}
            placeholderTextColor={COLORS.darkGray}
            maxLength={25}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.placeHolder}>Category</Text>
          <TextInput
            style={Styles.inputText}
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="characters"
            maxLength={20}
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
        </View>
        <View style={Styles.descriptionContainer}>
          <Text style={Styles.placeHolderDescription}>Description</Text>
          <TextInput
            style={Styles.inputTextDescription}
            multiline
            placeholderTextColor={COLORS.darkGray}
            maxLength={100}
            value={description}
            onChangeText={(text) => setDescription(text)}
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
