import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Styles } from './styles';

function AddButton({ handleModal }) {
  return (
    <TouchableOpacity style={Styles.addProductButton} onPress={handleModal}>
      <Ionicons style={Styles.addIcon} name="add" />
    </TouchableOpacity>
  );
}

export default AddButton;
