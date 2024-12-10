import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/navigation/routeNavigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
