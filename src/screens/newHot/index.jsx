import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import defaultStyle from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {getUpComingMovies} from '../../store/actions/movieActions';
import {themeColors} from '../../themes/themeColors';
import NewHotComp from '../../components/newHot/newHotComp';

const NewHotScreen = () => {
  const {upcominMovies, pending} = useSelector(state => state.movieStore);
  const dispatch = useDispatch();

  const isUpcomigPending = pending.upcoming;

  useEffect(() => {
    dispatch(getUpComingMovies());
  }, []);
  // console.log(upcominMovies);

  return (
    <View style={defaultStyle.detailScreenstyle}>
      <Text style={styles.title}>NEW & HOT</Text>
      <View style={styles.contTwo}>
        {isUpcomigPending ? (
          <ActivityIndicator size={'large'} color={themeColors.WHITE} />
        ) : (
          <View>
            <FlatList
              data={upcominMovies}
              renderItem={({item, index}) => (
                <NewHotComp item={item} key={index} />
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default NewHotScreen;

const styles = StyleSheet.create({
  contTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: themeColors.WHITE,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
});
