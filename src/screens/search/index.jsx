import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import defaultStyle from '../../styles';
import InputComp from '../../components/ui/inputComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../../themes/themeColors';
import debounce from 'lodash/debounce';
import {useDispatch, useSelector} from 'react-redux';
import SeeAllMovieCard from '../../components/home/seeAllMovieCard';
import {getSearchMovies} from '../../store/actions/movieActions';

const SearchScreen = () => {
  const {searchResults, pending} = useSelector(state => state.searchStore);
  const dispatch = useDispatch();
  const isPending = pending.searchResults;

  const [searchText, setSearchText] = useState('');

  const handleSearch = value => {
    // console.log('value:', value);
    setSearchText(value); //
    if (value.trim().length > 0) {
      dispatch(getSearchMovies({query: value}));
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  const clearInput = () => {
    setSearchText('');
  };
  return (
    <View style={defaultStyle.container}>
      <View style={styles.inputContainer}>
        <InputComp
          placeholder={'Search Movie'}
          onChangeText={handleTextDebounce}
          value={searchText}
        />
        <Pressable style={styles.icon} onPress={clearInput}>
          <AntDesign name="closecircleo" size={30} color={themeColors.WHITE} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}>Results ({searchResults.length})</Text>
      </View>

      {isPending ? (
        <ActivityIndicator size={'large'} color={themeColors.WHITE} />
      ) : searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          numColumns={2}
          renderItem={({item, index}) => (
            <SeeAllMovieCard item={item} key={index} />
          )}
        />
      ) : (
        <Text style={{color: themeColors.WHITE, textAlign: 'center'}}>
          No results found
        </Text>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 37,
    right: 25,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  title: {
    color: themeColors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
});
