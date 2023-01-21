import React from 'react';
import { FlatList } from 'react-native';

import ItemFromList from '../../components/itemFromList';
import { Styles } from './styles';

function Config({ navigation }) {
  const items = [{ id: 1, name: 'Logout' }];
  const renderItem = ({ item }) => (
    <ItemFromList
      {...item}
      onSelect={() => navigation.navigate(`${item.name}`, { productId: item.id })}
    />
  );
  return (
    <FlatList
      style={Styles.menuItemContainer}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default Config;
