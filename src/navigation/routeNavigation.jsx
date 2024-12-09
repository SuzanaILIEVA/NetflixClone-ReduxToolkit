import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import GetStartedScreen from '../screens/getStarted';
import SignInScreen from '../screens/signIn';
import WatchListScreen from '../screens/watchList';

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
    </Stack.Navigator>
  );
};

export default RouteNavigation;
