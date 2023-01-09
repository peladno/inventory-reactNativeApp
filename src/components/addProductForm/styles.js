import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
  inputText: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
    width: '50%',
    borderLeftWidth: 2,
    borderLeftColor: COLORS.backgroud,
    textAlign: 'center',
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
});
