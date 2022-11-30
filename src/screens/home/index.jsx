import React from 'react';
import { View, Text, Button } from 'react-native';

import { Styles } from './styles';

function Home({ navigation }) {
  return (
    <View style={Styles.homeContainer}>
      <Text>Home</Text>
      <Button title="Go to categories" onPress={() => navigation.navigate('Categories')} />
    </View>
  );
}

export default Home;
