import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  greetings: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
    color: COLORS.primary,
  },
  numberContainer: {
    width: 100,
    height: 100,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: COLORS.snowWhite,
    padding: 8,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
  },
  subNumber: {
    fontFamily: 'nunito-bold',
    fontSize: 15,
  },
  number: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
    color: COLORS.darkGray,
  },
  randomSubtitle: {
    fontFamily: 'nunito-regular',
    fontSize: 20,
    marginBottom: 10,
  },
});
