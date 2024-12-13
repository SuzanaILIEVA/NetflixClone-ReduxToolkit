import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import defaultStyle from '../../styles';
import HomeHeaderComp from '../../components/home/homeHeaderComp';
import widgets from '../../widgets/widgets.json';
import SectionsComp from '../../components/home/sectionsComp';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpComingMovies,
} from '../../store/actions/movieActions';
import {CATEGORIES_TITLES} from '../../utils/routes';

const HomeScreen = ({navigation}) => {
  const {
    topRatedMovies,
    popularMovies,
    upcominMovies,
    nowPlayingMovies,
    trendingMovies,
  } = useSelector(state => state.movieStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpComingMovies());
    dispatch(getNowPlayingMovies());
    dispatch(getTrendingMovies());
  }, []);

  // console.log('TOP RATED ==>', topRatedMovies);

  return (
    <SafeAreaView style={defaultStyle.container}>
      <HomeHeaderComp onPress={() => navigation.navigate(CATEGORIES_TITLES)} />

      <FlatList
        data={widgets}
        renderItem={({item}) => <SectionsComp item={item} />}></FlatList>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});