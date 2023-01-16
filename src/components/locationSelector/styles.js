import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
});
