import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { Styles } from './styles';

function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const product = useSelector((state) => state.item.items.find((item) => item.id === productId));

  return (
    <ScrollView style={Styles.productContainer}>
      <Text style={Styles.nameProduct}>{product.name}</Text>
      <Text>{product.address}</Text>
      <Image style={Styles.imageProduct} source={{ uri: product.image }} />
    </ScrollView>
  );
}

export default ProductDetail;
