import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  addProductButton: {
    alignItems: 'center',
    right: 20,
    height: 65,
    width: 65,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  addIcon: {
    color: COLORS.snowWhite,
    fontSize: 30,
  },
});
