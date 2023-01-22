import { Ionicons } from '@expo/vector-icons';
import React, { useReducer } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Input } from '../../components';
import { COLORS } from '../../constants/themes/colors';
import { signUp } from '../../store/auth.slice';
import { UPDATED_FORM, onInputChange } from '../../utils/form/index';
import { isAndroid } from '../../utils/index';
import { Styles } from './styles';

function Signup({ navigation }) {
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
    dispatch(signUp(formState.email.value, formState.password.value));
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
        <SafeAreaView style={Styles.signUpContainer}>
          <Ionicons style={Styles.clipboardIcon} name="clipboard-outline" />
          <Text style={Styles.registerTitle}>Create an account</Text>
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
              maxLength={10}
              autoCapitalize="none"
              autoCorrect={false}
              value={formState.password.value}
              hasError={formState.password.hasError}
              error={formState.password.error}
              touched={formState.password.touched}
              onChangeText={(text) => onHandleChangeInput(text, 'password')}
            />
          </View>
          <TouchableOpacity
            style={
              !formState.email.value || !formState.password.value
                ? Styles.disabledButton
                : Styles.registerButton
            }
            onPress={handleSubmit}
            disabled={!formState.email.value || !formState.password.value}>
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
    </TouchableWithoutFeedback>
  );
}

export default Signup;
