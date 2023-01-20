import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import { loadItems } from '../../store/item.slice';
//import { Product } from '../index';
import Product from '../Product/index';
import { Styles } from './styles';

function ProductList({ navigation, items }) {
  const dispatch = useDispatch();

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
    <FlatList
      style={Styles.productListContainer}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default ProductList;
