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
import { Styles } from './styles';

function ModalForm({ modalVisible, handleModal }) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.addProductContainer}>
          <AddProductForm handleModal={handleModal} />
          <TouchableOpacity style={Styles.cancelButton} onPress={handleModal}>
            <Text style={Styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ModalForm;
