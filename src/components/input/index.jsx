import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { Styles } from './styles';

const Input = ({
  editable,
  children,
  value,
  style,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View>
      <TextInput
        {...props}
        style={{ ...Styles.inputText, ...style }}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />

      {hasError && touched ? (
        <View style={Styles.message}>
          <Text style={Styles.helperText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;
