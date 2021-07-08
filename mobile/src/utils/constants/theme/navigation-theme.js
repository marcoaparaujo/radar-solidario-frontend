//#region Imports

import { DefaultTheme } from '@react-navigation/native';
import COLOR from 'assets/styles/color';

//#endregion

const { LIGHT, GREY } = COLOR;

export const NAVIGATION_THEME_LIGHT = {
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
