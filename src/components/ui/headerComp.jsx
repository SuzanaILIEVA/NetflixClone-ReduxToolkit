import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeaderComp = props => {
  const navigation = useNavigation();
  const {icon, iconPosition} = props;
  return (
    <View style={styles.headerContainer}>
      {iconPosition == 'left' && <Pressable {...props}>{icon}</Pressable>}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../../assets/images/logos_netflix_medium.png')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
      {iconPosition == 'right' && (
        <Pressable style={{paddingHorizontal: 10}} {...props}>
          {icon}
        </Pressable>
      )}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
});
