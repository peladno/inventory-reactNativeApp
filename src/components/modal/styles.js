import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  addProductContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    width: 100,
    backgroundColor: COLORS.red,
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  cancelText: {
    color: COLORS.snowWhite,
    textAlign: 'center',
  },
});
