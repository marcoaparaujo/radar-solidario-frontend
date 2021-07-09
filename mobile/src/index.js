//#region Imports

import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';
import App from './App';

//#endregion

LogBox.ignoreLogs(['Require cycle:']);

registerRootComponent(App);
