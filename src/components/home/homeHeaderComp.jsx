import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/constants';
import {themeColors} from '../../themes/themeColors';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {SEARCH} from '../../utils/routes';

const HomeHeaderComp = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeHeader}>
      <View>
        <Image
          source={require('../../assets/images/Variant2.png')}
          style={{width: width * 0.05, height: height * 0.05}}
        />
      </View>
      <View style={styles.headertextlist}>
        <Pressable>
          <Text style={styles.headerText}>TV Shows</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.headerText}>Movies</Text>
        </Pressable>
        <Pressable {...props}>
          <Text style={styles.headerText}>Categories</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate(SEARCH)}>
        <Feather name="search" size={25} />
      </Pressable>
    </View>
  );
};

export default HomeHeaderComp;

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headertextlist: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    width: width * 0.7,
    paddingHorizontal: 10,
    gap: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: themeColors.WHITE,
  },
});
