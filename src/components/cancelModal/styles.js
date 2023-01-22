import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparentBackground,
  },
  modalMessageContainer: {
    backgroundColor: COLORS.snowWhite,
    width: '80%',
    padding: 20,
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: 'nunito-bold',
    marginBottom: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDetailContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDetailText: {
    fontSize: 18,
    color: COLORS.text,
    fontFamily: 'nunito-regular',
    textAlign: 'center',
  },
  selectedTask: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: 'nunito-bold',
    paddingVertical: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
