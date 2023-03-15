/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import Buttons1 from "./src/apps/Buttons1"; 
// import dimensionView from './src/apps/dimensionView';
// import flexView from './src/apps/flexView';
// import Counter from "./src/apps/Counter";
// TODO: Install global C:/ npx console nodejs.
import Screen1 from "./src/apps/Screen1"
AppRegistry.registerComponent(appName, () => Screen1);
