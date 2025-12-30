import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';

const RootStack = createNativeStackNavigator({
  screens: {
    ScreenOne: {
      screen: ScreenOne,
    },
    ScreenTwo: {
      screen: ScreenTwo,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);