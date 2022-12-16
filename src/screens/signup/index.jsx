import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import { Styles } from './styles';

function Signup({ navigation }) {
  return (
    <KeyboardAvoidingView style={Styles.keyboardContainer} behavior="paddind" enabled>
      <View style={Styles.signUpContainer}>
        <Text>Signup</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Signup;
