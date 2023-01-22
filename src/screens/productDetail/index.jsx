import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ModalCancel } from '../../components';
import { deleteItemThunk } from '../../store/item.slice';
import { Styles } from './styles';

function ProductDetail({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { productId } = route.params;
  const product = useSelector((state) => state.item.items.find((item) => item.id === productId));
  const dispatch = useDispatch();

  const onHandleDeleteItem = (id) => {
    dispatch(deleteItemThunk(id));
    navigation.goBack();
    setModalVisible(!modalVisible);
  };

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const openModal = () => setModalVisible(!modalVisible);
  return (
    <View style={Styles.productContainer}>
      <View style={Styles.productDetail}>
        <Text style={Styles.name}>{product.name}</Text>
        <Image style={Styles.image} source={{ uri: product.image }} />
        <Text style={Styles.address}>Address: {product.address}</Text>
        <Text style={Styles.category}>Category: {product.category}</Text>
        <Text style={Styles.description}>Description: {product.description}</Text>
      </View>
      <TouchableOpacity onPress={openModal} style={Styles.deleteButton}>
        <Text style={Styles.deleteTxt}>Delete</Text>
      </TouchableOpacity>
      <ModalCancel
        {...product}
        onHandleCancel={onHandleCancel}
        onHandleDeleteItem={onHandleDeleteItem}
        modalVisible={modalVisible}
      />
    </View>
  );
}

export default ProductDetail;
