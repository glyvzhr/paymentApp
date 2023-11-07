/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import {name as appName} from './app.json';
import Calculator from './src/calculator';

AppRegistry.registerComponent(appName, () => Calculator);
