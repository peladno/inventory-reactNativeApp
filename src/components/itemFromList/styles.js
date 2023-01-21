import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  itemListButton: {
    backgroundColor: COLORS.snowWhite,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  name: {
    fontFamily: 'nunito-bold',
    fontSize: 20,
    color: COLORS.primary,
  },
});
