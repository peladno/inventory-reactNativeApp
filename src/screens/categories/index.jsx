import React from 'react';
import { Button, Text, View } from 'react-native';

import { Styles } from './styles';

function Categories({ navigation }) {
  return (
    <View style={Styles.categoriesContainer}>
      <Text>Categories</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
}

export default Categories;
