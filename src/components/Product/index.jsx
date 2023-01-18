import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import { Styles } from './styles';

function Product({ id, name, image, onSelect, address }) {
  return (
    <TouchableOpacity style={Styles.productContainer} onPress={onSelect}>
      <Image style={Styles.imageProduct} source={{ uri: image }} />
      <View style={Styles.textContainer}>
        <Text style={Styles.nameProduct}>{name}</Text>
        <Text style={Styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Product;
