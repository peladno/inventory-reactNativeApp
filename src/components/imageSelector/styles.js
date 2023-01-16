import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productImage: {
    borderColor: COLORS.primary,
    height: 200,
    width: 300,
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
    marginBottom: 10,
  },
  takePicture: {
    color: COLORS.snowWhite,
    fontFamily: 'nunito-regular',
  },
  emptyImage: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.darkGray,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: COLORS.white,
  },
  addPhotoText: {
    color: COLORS.backgroud,
    fontFamily: 'nunito-bold',
  },
});
