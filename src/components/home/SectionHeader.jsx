import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../themes/themeColors';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';

const SectionHeader = props => {
  const {title, value} = props;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate(MOVIELIST, {value: value})}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  seeAll: {
    fontSize: 18,
    color: themeColors.YELLOW,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
