import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMG_URL} from '../../services/urls';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {themeColors} from '../../themes/themeColors';

const NewHotComp = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={
            item.poster_path
              ? {uri: `${IMG_URL}${item.poster_path}`}
              : require('../../assets/images/moviblack.jpg')
          }
          style={styles.posterImage}
        />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconbox}>
          <FontAwesome name="bell" size={30} color={themeColors.WHITE} />
          <Text>Remind Me</Text>
        </View>
        <View style={styles.iconbox}>
          <FontAwesome name="share-alt" size={30} color={themeColors.WHITE} />
          <Text>Share</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.overview.substring(0, 200)}...</Text>
      </View>
    </View>
  );
};

export default NewHotComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  imgContainer: {
    width: '100%',
    aspectRatio: 1.5,
  },
  posterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    marginRight: 15,
  },
  iconbox: {
    alignItems: 'center',
    marginVertical: 10,
  },
  infoContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.WHITE,
  },
  desc: {
    fontSize: 17,
    color: themeColors.WHITE,
    marginTop: 5,
    lineHeight: 22,
    marginBottom: 20,
  },
});
