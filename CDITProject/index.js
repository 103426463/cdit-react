/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// import Buttons1 from "./src/apps/Buttons1"; 
// import dimensionView from './src/apps/dimensionView';
// import flexView from './src/apps/flexView';
//  import Counter from "./src/apps/Counter";
 import test from "./src/apps/test"
AppRegistry.registerComponent(appName, () => test);
