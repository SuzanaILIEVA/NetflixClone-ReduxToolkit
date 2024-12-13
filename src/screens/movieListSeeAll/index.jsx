import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../../themes/themeColors';
import {useSelector} from 'react-redux';
import MovieCard from '../../components/home/movieCard';
import SeeAllMovieCard from '../../components/home/seeAllMovieCard';

const MovieListScreen = ({navigation, route}) => {
  const {value} = route.params;

  const {topRatedMovies, popularMovies, upcominMovies, nowPlayingMovies} =
    useSelector(state => state.movieStore);
  // console.log(topRatedMovies);

  const renderData = () => {
    switch (value) {
      case 'top_rated':
        return topRatedMovies;
      case 'popular':
        return popularMovies;
      case 'now_playing':
        return nowPlayingMovies;
      case 'upcoming':
        return upcominMovies;

      default:
        popularMovies;
    }
  };

  const formatedValue = value.split('_').join(' ');
  return (
    <View style={defaultStyle.container}>
      <HeaderComp
        iconPosition="left"
        icon={
          <AntDesign
            name="arrowleft"
            size={30}
            color={themeColors.WHITE}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <View>
        <Text
          style={styles.seeAllTitle}>{`See All ${formatedValue} Movies`}</Text>

        {/* Add movie list */}
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={renderData()}
          renderItem={({item}) => <SeeAllMovieCard item={item} />}
          style={{marginBottom: 100}}
        />
      </View>
    </View>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  seeAllTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
});
