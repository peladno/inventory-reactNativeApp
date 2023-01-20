import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductList } from '../../components';
import { Styles } from './styles';

function Search({ navigation }) {
  const items = useSelector((state) => state.item.items);

  return (
    <View style={Styles.searchContainer}>
      <ProductList items={items} navigation={navigation} />
    </View>
  );
}

export default Search;
