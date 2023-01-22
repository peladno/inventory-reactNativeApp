import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  inputText: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
    width: 240,
    paddingLeft: 10,
  },
  message: {
    position: 'absolute',
    width: 300,
    top: 42,
    left: -40,
  },
  helperText: {
    color: COLORS.red,
    fontFamily: 'nunito-regular',
    fontSize: 15,
  },
});
