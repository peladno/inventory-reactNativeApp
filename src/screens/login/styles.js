import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.snowWhite,
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    margin: 15,
    width: 300,
  },
  iconInput: {
    fontSize: 25,
    paddingEnd: 10,
    color: COLORS.darkGray,
  },
  lockIcon: {
    fontSize: 85,
    paddingBottom: 15,
  },
  loginButton: {
    alignItems: 'center',
    width: 300,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    margin: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  loginText: {
    color: COLORS.snowWhite,
    fontSize: 20,
    fontFamily: 'nunito-regular',
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: COLORS.primary,
    fontFamily: 'nunito-bold',
    fontSize: 15,
  },
  textAccount: {
    fontFamily: 'nunito-regular',
    fontSize: 15,
  },
  welcomeTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
  },
  welcomeSubtitle: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 40,
  },
});
