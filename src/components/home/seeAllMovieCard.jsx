import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMG_URL} from '../../services/urls';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const SeeAllMovieCard = ({item}) => {
  const navigation = useNavigation();
  // console.log('See All Movie Card item id', item.id);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
        <Image
          source={
            item.poster_path
              ? {uri: `${IMG_URL}${item.poster_path}`}
              : require('../../assets/images/moviblack.jpg')
          }
          style={styles.image}
        />

        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default SeeAllMovieCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: width * 0.44,
    height: width * 0.7,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  title: {
    maxWidth: width * 0.44,
    padding: 3,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
  },
});
