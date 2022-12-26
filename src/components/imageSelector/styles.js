import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productImage: {
    borderColor: COLORS.primary,
    height: 150,
    width: 200,
  },
  photoButton: {
    width: '50%',
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    margin: 15,
  },
  imageSelectorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePicture: {
    color: COLORS.snowWhite,
    fontFamily: 'nunito-regular',
  },
});
