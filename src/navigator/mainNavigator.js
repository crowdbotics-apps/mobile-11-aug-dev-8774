import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen79819Navigator from '../features/BlankScreen79819/navigator';
import BlankScreen69818Navigator from '../features/BlankScreen69818/navigator';
import BlankScreen09812Navigator from '../features/BlankScreen09812/navigator';
import BlankScreen09810Navigator from '../features/BlankScreen09810/navigator';
import BlankScreen09806Navigator from '../features/BlankScreen09806/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen79819: { screen: BlankScreen79819Navigator },
BlankScreen69818: { screen: BlankScreen69818Navigator },
BlankScreen09812: { screen: BlankScreen09812Navigator },
BlankScreen09810: { screen: BlankScreen09810Navigator },
BlankScreen09806: { screen: BlankScreen09806Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
