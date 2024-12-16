import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../themes/themeColors';
import {IMG_URL} from '../../services/urls';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';
import {useSelector} from 'react-redux';

const SearchCard = props => {
  const navigation = useNavigation();

  const {item} = props;
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
      <View style={styles.card}>
        <View style={styles.cardleft}>
          <Image
            source={
              item.poster_path
                ? {uri: `${IMG_URL}${item.poster_path}`}
                : require('../../assets/images/moviblack.jpg')
            }
            style={styles.posterImage}
          />
          <Text numberOfLines={1} style={styles.titleText}>
            {item.title}
          </Text>
        </View>
        <View>
          <AntDesign name="playcircleo" size={30} color={themeColors.WHITE} />
        </View>
      </View>
    </Pressable>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: themeColors.DARK_GRAY,
    marginBottom: 5,
    paddingRight: 5,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  posterImage: {
    width: 180,
    height: 120,
    borderRadius: 10,

    resizeMode: 'cover',
  },
  titleText: {
    maxWidth: width * 0.4,
    fontSize: 16,
  },
  cardleft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
