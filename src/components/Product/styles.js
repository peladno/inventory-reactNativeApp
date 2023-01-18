import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: COLORS.snowWhite,
    borderRadius: 10,
    marginBottom: 15,
  },
  imageProduct: {
    width: 90,
    height: 90,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    width: '60%',
    marginLeft: 10,
  },
  nameProduct: {
    fontFamily: 'nunito-bold',
    color: COLORS.text,
    fontSize: 25,
  },
  address: {
    fontFamily: 'nunito-regular',
    color: COLORS.darkGray,
  },
});
