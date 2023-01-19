import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { AddButton, Product, ModalForm } from '../../components/index';
import { loadItems } from '../../store/item.slice';
import { Styles } from './styles';

function Products({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <Product
      {...item}
      onSelect={() => navigation.navigate('ProductDetail', { productId: item.id })}
    />
  );

  return (
    <SafeAreaView style={Styles.productsContainer}>
      <FlatList
        style={Styles.productListContainer}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={Styles.addButtonContainer}>
        <AddButton handleModal={handleModal} />
        <ModalForm modalVisible={modalVisible} handleModal={handleModal} />
      </View>
    </SafeAreaView>
  );
}

export default Products;
