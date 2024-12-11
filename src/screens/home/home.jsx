import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import {height, width} from '../../utils/constants';
import {themeColors} from '../../themes/themeColors';
import HomeHeaderComp from '../../components/ui/homeHeaderComp';

const HomeScreen = () => {
  return (
    <SafeAreaView style={defaultStyle.container}>
      <HomeHeaderComp />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
