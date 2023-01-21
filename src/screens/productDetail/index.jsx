import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { deleteItemThunk } from '../../store/item.slice';
import { Styles } from './styles';

function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const product = useSelector((state) => state.item.items.find((item) => item.id === productId));
  const dispatch = useDispatch();

  const onHandleDelete = (id) => {
    dispatch(deleteItemThunk(id));
    navigation.goBack();
  };
  return (
    <View style={Styles.productContainer}>
      <View style={Styles.productDetail}>
        <Text style={Styles.name}>{product.name}</Text>
        <Image style={Styles.image} source={{ uri: product.image }} />
        <Text style={Styles.address}>Address: {product.address}</Text>
        <Text style={Styles.category}>Category: {product.category}</Text>
        <Text style={Styles.description}>Description: {product.description}</Text>
      </View>
      <TouchableOpacity onPress={() => onHandleDelete(product.id)} style={Styles.deleteButton}>
        <Text style={Styles.deleteTxt}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductDetail;
