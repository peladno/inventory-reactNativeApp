import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { AddButton, Product, ModalForm } from '../../components/index';
import { Styles } from './styles';

function Products() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  const items = useSelector((state) => state.item.items);
  const renderItem = ({ item }) => {
    <Product {...item} />;
  };
  return (
    <SafeAreaView style={Styles.productsContainer}>
      <Text>Products</Text>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderItem} />
      <View style={Styles.addButtonContainer}>
        <AddButton handleModal={handleModal} />
        <ModalForm modalVisible={modalVisible} handleModal={handleModal} />
      </View>
    </SafeAreaView>
  );
}

export default Products;
