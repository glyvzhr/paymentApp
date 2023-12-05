/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Netflix from './src/Netflix';
import UserNameScreen from './src/UserNameScreen';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);