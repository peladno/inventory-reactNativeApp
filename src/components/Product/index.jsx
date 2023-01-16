import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

function Product({ id, name, image, onSelect }) {
  return (
    <TouchableOpacity onSelect={onSelect}>
      <Image source={{ uri: image }} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

export default Product;
