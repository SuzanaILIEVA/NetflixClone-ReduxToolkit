import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import defaultStyle from './src/styles';
import RouteNavigation from './src/navigation/routeNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RouteNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
