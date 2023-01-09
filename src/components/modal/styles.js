import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  addProductContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroud,
  },
  cancelButton: {
    alignItems: 'center',
    width: 300,
    backgroundColor: COLORS.red,
    padding: 8,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  cancelText: {
    color: COLORS.snowWhite,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'nunito-bold',
  },
});
