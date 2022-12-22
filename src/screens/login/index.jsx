import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/themes/colors';
import { Styles } from './styles';

function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={Styles.keyboardContainer} behavior="padding" enabled>
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
            onChangeText={() => {}}
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
            onChangeText={() => {}}
          />
        </View>
        <TouchableOpacity style={Styles.loginButton} onPress={() => {}}>
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
