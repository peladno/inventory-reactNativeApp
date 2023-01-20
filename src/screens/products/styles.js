import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: -10,
  },
});
