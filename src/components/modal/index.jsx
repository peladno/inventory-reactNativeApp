import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';

import AddProductForm from '../addProductForm';
import ImageSelector from '../imageSelector';
import { Styles } from './styles';

function ModalForm({ modalVisible, handleModal }) {
  const onImageSelected = (uri) => {
    console.warn('uri', uri);
  };
  return (
    <Modal visible={modalVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.addProductContainer}>
          <ImageSelector onImageSelected={onImageSelected} />
          <AddProductForm />
          <TouchableOpacity style={Styles.cancelButton} onPress={handleModal}>
            <Text style={Styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ModalForm;
