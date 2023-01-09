import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/themes/colors';
import { isAndroid } from '../../utils/index';
import { Styles } from './styles';

function AddProductForm() {
  const [quantity, setQuantity] = useState('');
  const [itemName, setItemName] = useState(null);
  return (
    <KeyboardAvoidingView
      style={Styles.keyboardContainer}
      behavior={isAndroid ? 'height' : 'padding'}
      enabled>
      <SafeAreaView style={Styles.formContainer}>
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
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
        </View>
        <TouchableOpacity style={Styles.addItemButton}>
          <Text style={Styles.saveText}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default AddProductForm;
