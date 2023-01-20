import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AddButton, ModalForm, ProductList } from '../../components/index';
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

  return (
    <View style={Styles.productsContainer}>
      <ProductList items={items} navigation={navigation} />
      <View style={Styles.addButtonContainer}>
        <AddButton handleModal={handleModal} />
        <ModalForm modalVisible={modalVisible} handleModal={handleModal} />
      </View>
    </View>
  );
}

export default Products;
