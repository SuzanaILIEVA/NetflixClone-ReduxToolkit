import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import {themeColors} from '../../themes/themeColors';
import {width} from '../../utils/constants';
import ButtonComp from '../../components/ui/buttonComp';
import {HOME} from '../../utils/routes';

const DownloadScreen = ({navigation}) => {
  return (
    <View style={defaultStyle.container}>
      <Text style={styles.header}>Smart Downloads</Text>

      <View>
        <Text style={styles.subheader}> Introducing Downloads For You</Text>
        <Text style={styles.description}>
          Netflix offers smart, adaptive, and personalized downloads that help
          you save time and money.
        </Text>
      </View>
      <View style={styles.circle} />

      <ButtonComp title={'SETUP'} color={themeColors.BLUE} />

      <TouchableOpacity
        style={styles.findBtn}
        onPress={() => navigation.navigate(HOME)}>
        <Text style={styles.findText}>Find Something to Download</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.description}>
          Learn more about smart, adaptive, and personalized downloads at{' '}
          <Text style={{color: themeColors.RED}}>
            help.netflix.com/smart-downloads
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '400',
    color: themeColors.WHITE,
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subheader: {
    fontSize: 24,
    fontWeight: '500',
    color: themeColors.WHITE,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,

    textTransform: 'capitalize',
  },
  description: {
    fontSize: 17,
    paddingHorizontal: 10,
    color: themeColors.WHITE,
  },
  circle: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: (width * 0.5) / 2,
    backgroundColor: themeColors.DARK_GRAY,
    alignSelf: 'center',
    marginVertical: 25,
  },
  findBtn: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: themeColors.DARK_GRAY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 20,
  },
  findText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.WHITE,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
