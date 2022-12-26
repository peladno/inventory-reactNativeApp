import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors';
import { signIn } from '../../store/actions/index';
import { isAndroid } from '../../utils/index';
import { Styles } from './styles';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signIn(email, password));
  };
  return (
    <KeyboardAvoidingView
      style={Styles.keyboardContainer}
      behavior={isAndroid ? 'height' : 'padding'}
      enabled>
      <SafeAreaView style={Styles.formContainer}>
        <Ionicons style={Styles.lockIcon} name="md-lock-open-outline" />
        <Text style={Styles.welcomeTitle}>Welcome back!</Text>
        <Text style={Styles.welcomeSubtitle}>Please login with your account.</Text>
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
        <TouchableOpacity style={Styles.loginButton} onPress={handleSubmit}>
          <Text style={Styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={Styles.registerTextContainer}>
          <Text style={Styles.textAccount}>New here? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={Styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Login;
