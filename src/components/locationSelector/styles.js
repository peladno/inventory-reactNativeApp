import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  locationButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  locationIcon: {
    fontSize: 25,
    color: COLORS.primary,
  },
  locationText: {
    fontSize: 20,
  },
  noLocationText: {
    fontSize: 18,
    paddingBottom: 10,
    color: COLORS.text,
    fontFamily: 'nunito-regular',
  },
});
