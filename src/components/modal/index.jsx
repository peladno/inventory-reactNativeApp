import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import ImageSelector from '../imageSelector';
import { Styles } from './styles';

function ModalForm({ modalVisible, handleModal }) {
  const onImageSelected = (uri) => {
    console.warn('uri', uri);
  };
  return (
    <Modal visible={modalVisible} animationType="slide">
      <Text>Add product</Text>
      <View style={Styles.addProductContainer}>
        <ImageSelector onImageSelected={onImageSelected} />
        <TouchableOpacity style={Styles.cancelButton} onPress={handleModal}>
          <Text style={Styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default ModalForm;
