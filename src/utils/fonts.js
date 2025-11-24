import { Platform } from 'react-native';

export const fonts = {
  light: Platform.OS === 'ios' ? 'Montserrat-Light' : 'Montserrat-Light',
  regular: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular',
  medium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  semiBold: Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold',
  bold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat-Bold',
  extraBold: Platform.OS === 'ios' ? 'Montserrat-ExtraBold' : 'Montserrat-ExtraBold',
};