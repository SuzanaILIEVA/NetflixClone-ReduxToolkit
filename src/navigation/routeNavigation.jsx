import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDWATCHLISTITEM,
  BOTTOMTAB,
  CATEGORIES_TITLES,
  GETSTARTED,
  MOVIEDETAIL,
  MOVIELIST,
  PERSON_DETAILS,
  SIGNIN,
  WATCHLIST,
} from '../utils/routes';
import GetStartedScreen from '../screens/getStarted';
import SignInScreen from '../screens/signIn';
import WatchListScreen from '../screens/watchList';
import AddWatchListItemScreen from '../screens/watchList/addWatchListItemScreen';
import TabNavigation from './tabNavigation';
import MovieListScreen from '../screens/movieListSeeAll';
import CategoriesScreen from '../screens/home/categoriesScreen';
import MovieDetailScreen from '../screens/movieDetail';
import PersonDetailScreen from '../screens/personDetail';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={GETSTARTED} component={GetStartedScreen} />
      <Stack.Screen name={SIGNIN} component={SignInScreen} />
      <Stack.Screen name={WATCHLIST} component={WatchListScreen} />
      <Stack.Screen
        name={ADDWATCHLISTITEM}
        component={AddWatchListItemScreen}
      />
      <Stack.Screen name={BOTTOMTAB} component={TabNavigation} />
      <Stack.Screen name={MOVIELIST} component={MovieListScreen} />
      <Stack.Screen name={CATEGORIES_TITLES} component={CategoriesScreen} />
      <Stack.Screen name={MOVIEDETAIL} component={MovieDetailScreen} />
      <Stack.Screen name={PERSON_DETAILS} component={PersonDetailScreen} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
