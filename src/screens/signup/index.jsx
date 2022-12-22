import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/themes/colors';
import { Styles } from './styles';

function Signup({ navigation }) {
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
        <TouchableOpacity style={Styles.registerButton} onPress={() => {}}>
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
