import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDWATCHLISTITEM, GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import GetStartedScreen from '../screens/getStarted';
import SignInScreen from '../screens/signIn';
import WatchListScreen from '../screens/watchList';
import AddWatchListItemScreen from '../screens/watchList/addWatchListItemScreen';

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
    </Stack.Navigator>
  );
};

export default RouteNavigation;
