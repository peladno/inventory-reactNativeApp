import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Styles } from './styles';

function ItemFromList({ id, name, onSelect }) {
  return (
    <TouchableOpacity style={Styles.itemListButton} onPress={onSelect}>
      <Text style={Styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

export default ItemFromList;
