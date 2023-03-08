/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import App1 from "./src/apps/App1"; 
import App from './src/apps/App';

AppRegistry.registerComponent(appName, () => App1);
