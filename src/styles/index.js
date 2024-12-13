import {StyleSheet} from 'react-native';
import {themeColors} from '../themes/themeColors';

const defaultStyle = StyleSheet.create({
  container: {
    backgroundColor: themeColors.BLACK,
    flex: 1,
    padding: 5,
  },

  detailScreenstyle: {
    backgroundColor: themeColors.BLACK,
    flex: 1,
  },
});

export default defaultStyle;
