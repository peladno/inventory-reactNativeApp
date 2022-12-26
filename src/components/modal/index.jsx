import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

import ImageSelector from '../imageSelector';

function ModalForm({ modalVisible, handleModal }) {
  const onImageSelected = (uri) => {
    console.warn('uri', uri);
  };
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View>
        <Text>Modal</Text>
        <ImageSelector onImageSelected={onImageSelected} />
        <Button onPress={handleModal} title="Cancel" />
      </View>
    </Modal>
  );
}

export default ModalForm;
