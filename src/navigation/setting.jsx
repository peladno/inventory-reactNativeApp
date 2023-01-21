import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Config, Logout } from '../screens';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Config} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
