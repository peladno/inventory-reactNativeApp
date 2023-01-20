import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: COLORS.snowWhite,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
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
    color: COLORS.primary,
    fontSize: 25,
  },
  address: {
    fontFamily: 'nunito-regular',
    color: COLORS.darkGray,
  },
});
