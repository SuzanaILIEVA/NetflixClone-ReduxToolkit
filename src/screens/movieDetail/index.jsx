import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../../themes/themeColors';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCastDetails,
  getMovieDetail,
  getSimilarMovies,
} from '../../store/actions/movieActions';
import {IMG_URL, LOGO_URL} from '../../services/urls';
import {height, width} from '../../utils/constants';
import MovieCard from '../../components/home/movieCard';
const MovieDetailScreen = ({navigation, route}) => {
  const {movieId} = route?.params;
  console.log('movieId: ' + movieId);

  const {movieDetailData, pending, castDetails, similarMovies} = useSelector(
    state => state.movieStore,
  );
  const isMovieDetailPending = pending.movieDetail;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail({movieId: movieId}));
    dispatch(getCastDetails({movieId}));
    dispatch(getSimilarMovies({movieId}));
  }, []);

  // console.log('MovieDetail SCREEEN CAST DETAILS', castDetails);

  const formatedVoteAverage = movieDetailData?.vote_average
    ? movieDetailData.vote_average.toFixed(1)
    : '0.0';
  const formatedReleaseDate = movieDetailData?.release_date
    ? movieDetailData?.release_date.slice(0, 4)
    : null;

  return (
    <View style={defaultStyle.detailScreenstyle}>
      <HeaderComp
        iconPosition={'left'}
        icon={
          <AntDesign
            name="arrowleft"
            size={30}
            color={themeColors.WHITE}
            onPress={() => navigation.goBack()}
          />
        }
      />

      <View style={styles.container}>
        {isMovieDetailPending ? (
          <ActivityIndicator size={'large'} color={themeColors.WHITE} />
        ) : (
          <ScrollView nestedScrollEnabled={true}>
            <Image
              source={{uri: `${IMG_URL}${movieDetailData?.backdrop_path}`}}
              style={styles.imgCard}
            />
            <View style={styles.voteContainer}>
              <Text style={styles.vote}>{formatedVoteAverage}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{movieDetailData?.title}</Text>
              <View style={styles.releaseDateContainer}>
                <Text style={styles.releaseDate}>
                  {' '}
                  Released : {formatedReleaseDate}
                </Text>
                {/* <Text style={styles.releaseDate}>•</Text> */}
                <Text style={styles.releaseDate}>
                  {' '}
                  Time :{movieDetailData?.runtime} min
                </Text>
              </View>
              <Text style={styles.overview}>{movieDetailData?.overview}</Text>
            </View>

            <View style={{marginHorizontal: 10}}>
              <Text style={styles.subtitles}>Genres</Text>

              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movieDetailData.genres}
                renderItem={({item, index}) => (
                  <>
                    <Text style={styles.languageName}>{item.name}</Text>
                    {/* Sadece son eleman dışında '•' işaretini göster */}
                    {index !== movieDetailData.genres.length - 1 && (
                      <Text style={styles.languageNamedot}>•</Text>
                    )}
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.subtitles}>Languages</Text>
              <FlatList
                horizontal
                data={movieDetailData.spoken_languages}
                renderItem={({item, index}) => (
                  <>
                    <Text style={styles.languageName}>{item.name}</Text>
                    {index !== movieDetailData.spoken_languages.length - 1 && (
                      <Text style={styles.languageNamedot}>•</Text>
                    )}
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* ACTORS */}

            <View style={{marginHorizontal: 10}}>
              <Text style={styles.subtitles}>Top Cast</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={castDetails}
                renderItem={({item}) => (
                  <View style={styles.actorCard}>
                    <Image
                      source={
                        item.profile_path
                          ? {uri: `${IMG_URL}${item.profile_path}`}
                          : require('../../assets/images/noImage.png')
                      }
                      style={styles.castImage}
                    />
                    <Text numberOfLines={1} style={styles.companyName}>
                      {item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.subtitles}>Production Companies</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movieDetailData.production_companies}
                renderItem={({item}) => (
                  <View style={styles.companies}>
                    {/* {console.log(
                      'Company =====>>:',
                      item.name,
                      'Logo path====>>:',
                      item.logo_path,
                    )} */}
                    <Image
                      source={
                        item.logo_path
                          ? {uri: `${IMG_URL}${item.logo_path}`}
                          : require('../../assets/images/defaultlogo.jpg') // Yerel resim
                      }
                      style={{
                        width: 90,
                        height: 50,
                        resizeMode: 'contain',
                        backgroundColor: themeColors.WHITE,
                        borderRadius: 10,
                        marginLeft: 10,
                        marginTop: 5,
                        padding: 10,
                      }}
                      onError={error =>
                        console.log(
                          'Image load error:',
                          error.nativeEvent.error,
                        )
                      }
                    />
                    {/* {console.log(
                      'Generated Image URL:',
                      `${IMG_URL}${item.logo_path}`,
                    )} */}

                    <Text numberOfLines={2} style={styles.companyName}>
                      {item.name}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.subtitles}>Production Countries</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movieDetailData.production_countries}
                renderItem={({item, index}) => (
                  <>
                    <Text style={styles.languageName}>{item.name}</Text>
                    {index !==
                      movieDetailData.production_countries.length - 1 && (
                      <Text style={styles.languageNamedot}>•</Text>
                    )}
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* SIMILAR MOVIES */}
            <View style={styles.similarContainer}>
              <Text style={styles.subtitles}>Similar Movies</Text>

              <FlatList
                data={similarMovies}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => <MovieCard item={item} />}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCard: {
    width: width,
    height: height * 0.5,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: themeColors.WHITE,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  releaseDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  releaseDate: {
    fontSize: 16,
    color: themeColors.WHITE,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: themeColors.DARK_GRAY,
    borderRadius: 5,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize', //for uppercase letters only
  },
  overview: {
    fontSize: 18,
    color: themeColors.WHITE,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  voteContainer: {
    position: 'absolute',
    backgroundColor: themeColors.RED,
    padding: 10,
    paddingHorizontal: 15,
    right: 0,
  },
  vote: {
    fontSize: 18,
    color: themeColors.WHITE,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
  },

  languageName: {
    fontSize: 16,
    color: themeColors.WHITE,
    marginLeft: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: themeColors.DARK_GRAY,
    borderRadius: 5,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  languageNamedot: {
    fontSize: 20,
    color: themeColors.WHITE,
    marginLeft: 10,
    marginBottom: 10,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  subtitles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.WHITE,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  companies: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  companyName: {
    fontSize: 16,
    flexWrap: 'wrap',
    maxWidth: 100,
    marginLeft: 10,
  },
  castImage: {
    width: 100,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  similarContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
});
