import { useFonts } from 'expo-font';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import AppNavigator from './navigation';

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

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
