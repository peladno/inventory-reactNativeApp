import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { deleteItemThunk } from '../../store/item.slice';
import { Styles } from './styles';

function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const product = useSelector((state) => state.item.items.find((item) => item.id === productId));
  const dispatch = useDispatch();

  const onHandleDelete = (id) => {
    dispatch(deleteItemThunk(id));
  };
  return (
    <ScrollView style={Styles.productContainer}>
      <Text style={Styles.nameProduct}>{product.name}</Text>
      <Text>{product.address}</Text>
      <Image style={Styles.imageProduct} source={{ uri: product.image }} />
      <TouchableOpacity onPress={() => onHandleDelete(product.id, navigation.goBack())}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProductDetail;
