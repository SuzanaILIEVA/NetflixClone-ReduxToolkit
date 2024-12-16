import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMG_URL} from '../../services/urls';
import {width} from '../../utils/constants';
import {themeColors} from '../../themes/themeColors';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MovieCard = ({item}) => {
  const navigation = useNavigation();
  // console.log(' Moviecard movieId: ' + item.id);
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
        <Image
          source={
            item.poster_path
              ? {uri: `${IMG_URL}${item.poster_path}`}
              : require('../../assets/images/moviblack.jpg')
          }
          style={styles.imgCard}
        />
        <Text numberOfLines={1} style={styles.titleText}>
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  imgCard: {
    width: width * 0.35,
    height: width * 0.5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    lineHeight: 22,
    color: themeColors.GRAY,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
    overflow: 'hidden',
    maxWidth: width * 0.35,
    // textOverflow: 'ellipsis',
  },
});
