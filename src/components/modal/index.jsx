import React from 'react';
import { Modal, TouchableWithoutFeedback, View, Keyboard } from 'react-native';

//import { AddProductForm } from '../index';
import AddProductForm from '../addProductForm/index';
import { Styles } from './styles';

function ModalForm({ modalVisible, handleModal }) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.addProductContainer}>
          <AddProductForm handleModal={handleModal} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ModalForm;
