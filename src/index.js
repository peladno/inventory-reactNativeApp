import { useFonts } from 'expo-font';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import AppNavigator from './navigation';
import { store } from './store/index';

export default function App() {
  const [loaded] = useFonts({
    'nunito-regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#62BBC1" size="large" />
      </View>
    );
  }

  init()
    .then(() => {
      console.log('SQL database initialized');
    })
    .catch((err) => {
      console.log('Initilized failed');
      console.log(err);
    });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
