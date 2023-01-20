import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Config } from '../screens';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Config} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
