import { Ionicons } from '@expo/vector-icons';
import React, { useReducer } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { Input } from '../../components';
import { COLORS } from '../../constants/themes/colors';
import { signIn } from '../../store/auth.slice';
import { UPDATED_FORM, onInputChange } from '../../utils/form/index';
import { isAndroid } from '../../utils/index';
import { Styles } from './styles';

function Login({ navigation }) {
  const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case UPDATED_FORM:
        const { name, value, hasError, error, touched, isFormValid } = action.data;
        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
          },
          isFormValid,
        };
      default:
        return state;
    }
  };
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signIn(formState.email.value, formState.password.value));
  };
  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            <Input
              placeholder="Email"
              placeholderTextColor={COLORS.darkGray}
              keyboardType="email-address"
              maxLength={50}
              autoCapitalize="none"
              autoCorrect={false}
              value={formState.email.value}
              hasError={formState.email.hasError}
              error={formState.email.error}
              touched={formState.email.touched}
              onChangeText={(text) => onHandleChangeInput(text, 'email')}
            />
          </View>
          <View style={Styles.inputContainer}>
            <Ionicons name="key" style={Styles.iconInput} />
            <Input
              placeholder="Password"
              placeholderTextColor={COLORS.darkGray}
              secureTextEntry
              maxLength={15}
              autoCapitalize="none"
              autoCorrect={false}
              hasError={formState.password.hasError}
              error={formState.password.error}
              touched={formState.password.touched}
              onChangeText={(text) => onHandleChangeInput(text, 'password')}
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
    </TouchableWithoutFeedback>
  );
}

export default Login;
