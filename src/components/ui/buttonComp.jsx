import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../themes/themeColors';

const ButtonComp = props => {
  const {title, color} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginBottom: 30,
    borderRadius: 3,
  },
  title: {
    textAlign: 'center',
    color: themeColors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});
