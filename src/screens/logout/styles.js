import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroud,
    paddingHorizontal: 30,
  },
  icon: {
    fontSize: 90,
    color: COLORS.primary,
    right: -10,
  },
  subTitle: {
    fontFamily: 'nunito-regular',
    color: COLORS.text,
    marginVertical: 30,
    fontSize: 25,
    textAlign: 'center',
  },
  logoutButton: {
    alignItems: 'center',
    width: 100,
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
    borderWidth: 1,
  },
  logoutText: {
    fontFamily: 'nunito-bold',
    color: COLORS.snowWhite,
    fontSize: 20,
  },
});
