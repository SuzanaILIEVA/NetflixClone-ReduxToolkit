import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../themes/themeColors';
import {generateRandomColor} from '../../utils/functions';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
const WatchListItem = ({item}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.cotainer}>
      <View>
        <LinearGradient
          colors={[
            generateRandomColor(),
            generateRandomColor(),
            'rgba(255, 255, 255, 0.8)',
          ]}
          style={[
            styles.card,
            {
              width: width * 0.258,
              height: width * 0.258,
            },
          ]}>
          <Image
            source={require('../../assets/images/smile.png')}
            style={{
              width: width * 0.2,
              height: width * 0.2,
              resizeMode: 'contain',
            }}
          />
        </LinearGradient>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({
  cotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
  },
  shadow: {
    backgroundColor: ' rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    overflow: 'hidden',
  },
  card: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    shadowColor: themeColors.WHITE,
    elevation: 7,
  },
  title: {
    color: themeColors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});
