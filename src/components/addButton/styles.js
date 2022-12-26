import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  addProductButton: {
    alignItems: 'center',
    right: 20,
    height: 80,
    width: 80,
    backgroundColor: COLORS.primary,
    padding: 23,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    position: 'absolute',
  },
  addIcon: {
    color: COLORS.snowWhite,
    fontSize: 30,
  },
});
