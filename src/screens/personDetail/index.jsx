import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import defaultStyle from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPersonDetail,
  getPersonMovies,
} from '../../store/actions/movieActions';
import {IMG_URL} from '../../services/urls';
import {height, width} from '../../utils/constants';
import HeaderComp from '../../components/ui/headerComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../../themes/themeColors';
import MovieCard from '../../components/home/movieCard';

const PersonDetailScreen = ({navigation, route}) => {
  const {personId} = route?.params;
  //   console.log('personId: ' + personId);
  const dispatch = useDispatch();

  const {personDetail, pending, personMovies} = useSelector(
    state => state.personStore,
  );

  const isPersonDetailPending = pending.personDetail;

  useEffect(() => {
    dispatch(getPersonDetail({personId: personId}));
    dispatch(getPersonMovies({personId: personId}));
  }, []);

  //   console.log('personDetail:', JSON.stringify(personDetail, null, 2));
  // console.log('personMovies:', JSON.stringify(personMovies, null, 2));

  return (
    <View style={defaultStyle.container}>
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

      <View style={styles.containerr}>
        {isPersonDetailPending ? (
          <ActivityIndicator size={'large'} color={themeColors.WHITE} />
        ) : (
          <ScrollView>
            <View style={styles.personImg}>
              <Image
                source={
                  personDetail.profile_path
                    ? {
                        uri: `${IMG_URL}${personDetail.profile_path}`,
                      }
                    : require('../../assets/images/noImage.png')
                }
                style={styles.profileImage}
              />
            </View>
            <View>
              <Text style={styles.name}>{personDetail.name}</Text>
              <Text style={styles.birthplace}>
                {personDetail.place_of_birth}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.infoText}>
                  Gender : {personDetail.gender === 1 ? 'Female' : 'Male'}
                </Text>
                <Text style={styles.infoText}>
                  Birthday : {personDetail.birthday}
                </Text>
              </View>
              <View>
                <Text style={styles.infoText}>
                  Known for : {personDetail.known_for_department}
                </Text>
                <Text style={styles.infoText}>
                  Popularity : {personDetail?.popularity?.toFixed(1)}%
                </Text>
              </View>
            </View>
            <View style={styles.biographyContainer}>
              <Text style={styles.biographyTitle}>Biography</Text>
              <Text style={styles.biographyText}>
                {personDetail.biography || 'N/A'}
              </Text>
            </View>
            {/* Person Movies */}
            <View style={styles.moviesContainer}>
              <Text style={styles.biographyTitle}>Movies</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {personMovies.map((item, index) => (
                  <MovieCard key={index} item={item} />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default PersonDetailScreen;

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.7,
    height: width * 0.8,
    borderRadius: (width * 0.5) / 2,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  personImg: {
    width: width * 0.7,
    height: width * 0.8,
    borderRadius: (width * 0.5) / 2,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'gray',
    shadowColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 5,
    shadowRadius: 75,
    elevation: 25,
    marginTop: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',

    color: themeColors.WHITE,
    letterSpacing: 2,
    textShadowColor: themeColors.GRAY,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    shadowColor: themeColors.WHITE,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  birthplace: {
    fontSize: 18,
    textAlign: 'center',
    color: themeColors.GRAY,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    lineHeight: 2,
  },
  infoText: {
    fontSize: 17,
    color: themeColors.WHITE,
    marginBottom: 3,
  },
  biographyContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  biographyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 7,
    color: themeColors.WHITE,
  },
  biographyText: {
    fontSize: 17,
    color: themeColors.GRAY,
    marginBottom: 10,
  },
  moviesContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
