//#region Imports

import { DefaultTheme } from '@react-navigation/native';
import COLOR from 'assets/styles/color';

//#endregion

const { LIGHT, GREY } = COLOR;

const NAVIGATION_THEME = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        card: GREY,
        border: GREY,
        text: LIGHT.DARK,
        primary: LIGHT.DARK,
        background: LIGHT.MEDIUM
    }
};

export default NAVIGATION_THEME;
