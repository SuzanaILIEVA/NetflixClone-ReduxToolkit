import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import WatchListItem from '../../components/watchList/watchListItem';
import {ADDWATCHLISTITEM} from '../../utils/routes';

const WatchListScreen = ({navigation}) => {
  const {watchList} = useSelector(store => store.watchListStore);
  return (
    <View style={defaultStyle.container}>
      <HeaderComp
        icon={<FontAwesome5 name="pencil-alt" size={22} />}
        iconPosition="right"
        onPress={() => navigation.navigate(ADDWATCHLISTITEM)}
      />

      <View style={{height: 50}} />
      <Text style={styles.title}>Who's Watching?</Text>

      <FlatList
        numColumns={2}
        contentContainerStyle={{alignItems: 'center', marginBottom: 50}}
        data={watchList}
        renderItem={({item}) => <WatchListItem item={item} />}
      />
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
