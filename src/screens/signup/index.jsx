import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors';
import { signUp } from '../../store/actions/index';
import { Styles } from './styles';

function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signUp(email, password));
  };
  return (
    <KeyboardAvoidingView style={Styles.keyboardContainer} behavior="padding" enabled>
      <SafeAreaView style={Styles.signUpContainer}>
        <Ionicons style={Styles.clipboardIcon} name="clipboard-outline" />
        <Text style={Styles.registerTitle}>Create an account</Text>
        <View style={Styles.inputContainer}>
          <Ionicons name="mail-outline" style={Styles.iconInput} />
          <TextInput
            style={Styles.inputText}
            placeholder="Email ID"
            placeholderTextColor={COLORS.darkGray}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Ionicons name="key" style={Styles.iconInput} />
          <TextInput
            style={Styles.inputText}
            placeholder="Password"
            placeholderTextColor={COLORS.darkGray}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={Styles.registerButton} onPress={handleSubmit}>
          <Text style={Styles.registerTextButton}>Create Account</Text>
        </TouchableOpacity>
        <View style={Styles.loginTextContainer}>
          <Text style={Styles.textAccount}>Do you have any account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={Styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Signup;
