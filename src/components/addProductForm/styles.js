import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const Styles = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: COLORS.backgroud,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.snowWhite,
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
    marginBottom: 15,
    width: 300,
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.snowWhite,
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 8,
    width: 300,
    height: 150,
  },
  inputText: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
    width: '50%',
    borderLeftWidth: 2,
    borderLeftColor: COLORS.backgroud,
    paddingLeft: 10,
  },
  inputTextDescription: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
    width: '100%',
  },
  addItemButton: {
    alignItems: 'center',
    width: 300,
    backgroundColor: COLORS.primary,
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
  saveText: {
    color: COLORS.snowWhite,
    fontSize: 18,
    fontFamily: 'nunito-bold',
  },
  placeHolder: {
    width: '50%',
    fontSize: 18,
    fontFamily: 'nunito-regular',
  },
  placeHolderDescription: {
    width: '100%',
    fontSize: 18,
    fontFamily: 'nunito-regular',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.backgroud,
  },
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
