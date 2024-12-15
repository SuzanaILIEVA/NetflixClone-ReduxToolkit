import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';
import HomeTopComp from './homeTopComp';
import SeeAllMovieCard from './seeAllMovieCard';

const SectionsComp = props => {
  const {item} = props;
  // console.log('iteeemm', item.value);

  const {
    topRatedMovies,
    popularMovies,
    upcominMovies,
    nowPlayingMovies,
    trendingMovies,
  } = useSelector(state => state.movieStore);
  // console.log(topRatedMovies);

  const renderData = () => {
    switch (item.value) {
      case 'top_rated':
        return topRatedMovies;
      case 'popular':
        return popularMovies;
      case 'now_playing':
        return [...nowPlayingMovies].reverse();
      case 'upcoming':
        return upcominMovies;
      case 'trending':
        return [...trendingMovies].reverse();

      default:
    }
  };

  return (
    <View style={styles.container}>
      <SectionHeader title={item.title} value={item.value} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={renderData()}
        renderItem={({item}) => <MovieCard item={item} />}></FlatList>
    </View>
  );
};

export default SectionsComp;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});
