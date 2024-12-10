import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import ButtonComp from '../../components/ui/buttonComp';
import {themeColors} from '../../themes/themeColors';
import {useNavigation} from '@react-navigation/native';
import {SIGNIN} from '../../utils/routes';

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={defaultStyle.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/Rectangle64.png')}
          style={{
            width: '100%',
            height: '90%',
            resizeMode: 'stretch',
            position: 'absolute',
          }}
        />
        <Image
          source={require('../../assets/images/Rectangle66.png')}
          style={{
            width: '100%',
            height: '90%',
            resizeMode: 'cover',
            position: 'absolute',
            top: 0,
            zIndex: 1,
          }}
        />

        <View style={{flex: 1, zIndex: 99}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Unlimited entertainment, one low price.
            </Text>
            <Text style={styles.subtitle}>
              All of Netflix, starting at just ₹149.
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.dots}>••••</Text>
      <ButtonComp
        title={'GET STARTED'}
        color={themeColors.RED}
        onPress={() => navigation.navigate(SIGNIN)}
      />
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden', // Hide the overflow of the child component
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: themeColors.GRAY,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '70%',
    letterSpacing: 1.5,
  },
  subtitle: {
    position: 'absolute',
    bottom: 20,
    fontSize: 17,
    fontWeight: 'semibold',
    textShadowColor: '#000',
    width: '70%',
    textAlign: 'center',
  },
  dots: {
    fontSize: 50,
    textAlign: 'center',
    letterSpacing: 10,
  },
});
