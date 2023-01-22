import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import AppNavigator from './navigation';
import { store } from './store/index';
import { Styles } from './styles';

init()
  .then(() => {
    console.log('SQL database initialized');
  })
  .catch((err) => {
    console.log('Initilized failed');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    'nunito-regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <SafeAreaView styles={Styles.container}>
        <ActivityIndicator color="#62BBC1" size="large" />
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
