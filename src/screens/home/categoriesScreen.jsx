import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import defaultStyle from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {themeColors} from '../../themes/themeColors';
import HeaderComp from '../../components/ui/headerComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getCategories} from '../../store/actions/movieActions';

const CategoriesScreen = ({navigation}) => {
  const {categories} = useSelector(state => state.categoriesStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  // console.log('CategoriesScreen', categories);

  return (
    <SafeAreaView style={defaultStyle.container}>
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
      <Text style={styles.title}>All Categories</Text>

      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Text style={styles.name}>{item.name}</Text>
        )}></FlatList>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: themeColors.WHITE,
    letterSpacing: 3,
    marginTop: 20,
  },
  name: {
    textAlign: 'center',
    color: themeColors.WHITE,
    fontSize: 22,
    marginBottom: 25,
    fontWeight: '400',
    letterSpacing: 2,
  },
});
