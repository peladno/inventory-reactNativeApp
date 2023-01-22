import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

import { Styles } from './styles';

const ModalCancel = ({
  selectedTask,
  modalVisible,
  onHandleCancel,
  onHandleDeleteItem,
  name,
  id,
}) => {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={Styles.modalContainer}>
        <View style={Styles.modalMessageContainer}>
          <Text style={Styles.modalTitle}>Detail</Text>
          <View style={Styles.modalDetailContainer}>
            <Text style={Styles.modalDetailText}>Are you sure to delete this item?</Text>
            <Text style={Styles.selectedTask}>Name: {name}</Text>
          </View>
          <View style={Styles.modalButtonContainer}>
            <Button title="Cancel" color={COLORS.red} onPress={onHandleCancel} />
            <Button title="Delete" color={COLORS.primary} onPress={() => onHandleDeleteItem(id)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCancel;
