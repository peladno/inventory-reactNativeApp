import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroud,
    paddingHorizontal: 15,
  },
  productDetail: { width: 300, marginTop: 10, marginBottom: 20, fontSize: 18 },
  name: {
    fontFamily: 'nunito-bold',
    color: COLORS.primary,
    fontSize: 25,
    marginBottom: 20,
  },
  image: {
    fontFamily: 'nunito-regular',
    width: 300,
    height: 200,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 2,
    borderColor: COLORS.text,
    borderRadius: 10,
  },
  category: { fontFamily: 'nunito-regular', marginBottom: 10, fontSize: 18 },
  description: { fontFamily: 'nunito-regular', fontSize: 18 },
  deleteTxt: { color: COLORS.snowWhite, fontSize: 18, fontFamily: 'nunito-bold' },
  deleteButton: {
    alignItems: 'center',
    width: 300,
    backgroundColor: COLORS.red,
    padding: 8,
    marginBottom: 20,
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
  address: { fontFamily: 'nunito-regular', marginBottom: 10, fontSize: 18 },
});
