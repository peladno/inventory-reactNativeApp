import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AddButton, ModalForm } from '../../components/index';
import { Styles } from './styles';

function Products() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={Styles.productsContainer}>
      <Text>Products</Text>
      <View style={Styles.addButtonContainer}>
        <AddButton handleModal={handleModal} />
        <ModalForm modalVisible={modalVisible} handleModal={handleModal} />
      </View>
    </SafeAreaView>
  );
}

export default Products;
