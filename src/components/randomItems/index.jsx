import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { loadRandomItems } from '../../store/item.slice';
import Product from '../Product';

function RandomItems({ count, navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRandomItems(count));
  }, [count, dispatch]);

  const items = useSelector((state) => state.item.random);

  const renderItem = ({ item }) => (
    <Product
      {...item}
      onSelect={() => navigation.navigate('ProductDetail', { productId: item.id })}
    />
  );
  return (
    <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
  );
}

export default RandomItems;
