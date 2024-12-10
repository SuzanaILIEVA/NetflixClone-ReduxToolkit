import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {themeColors} from '../../themes/themeColors';
import Entypo from 'react-native-vector-icons/Entypo';

const InputComp = props => {
  const {error} = props;

  return (
    <View>
      {/* <Text>{label}</Text> */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} {...props} />
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={styles.infotext}>{error ? error : ''}</Text>
      </View>
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: themeColors.DARK_GRAY,
    marginTop: 20,
    margin: 10,
  },
  textInput: {
    fontSize: 18,
    color: themeColors.WHITE,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  infotext: {
    color: themeColors.RED,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  eye: {
    position: 'absolute',
    right: 20,
    top: 15,
    zIndex: 100,
    backgroundColor: 'transparent',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
