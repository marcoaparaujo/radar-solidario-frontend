//#region Imports

import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';

//#endregion

const { LIGHT, PRIMARY, POSITIVE, NEGATIVE, SECONDARY, GREY, BLACK } = COLOR;

const THEME = {
    Text: {
        style: {
            color: GREY,
            ...FONT.REGULAR
        }
    },
    Icon: {
        size: 18,
        solid: true,
        color: POSITIVE.MEDIUM,
        type: 'font-awesome-5'
    },
    Button: {
        titleStyle: {
            fontSize: 15,
            ...FONT.REGULAR
        },
        containerStyle: {
            width: '100%',
            borderRadius: 7
        },
        buttonStyle: {
            height: 55,
            backgroundColor: PRIMARY.MEDIUM
        }
    },
    colors: {
        primary: {
            dark: PRIMARY.DARK,
            light: PRIMARY.LIGHT,
            medium: PRIMARY.MEDIUM
        },
        secondary: {
            dark: SECONDARY.DARK,
            light: SECONDARY.LIGHT,
            medium: SECONDARY.MEDIUM
        },
        positive: {
            dark: POSITIVE.DARK,
            light: POSITIVE.LIGHT,
            medium: POSITIVE.MEDIUM
        },
        negative: {
            dark: NEGATIVE.DARK,
            light: NEGATIVE.LIGHT,
            medium: NEGATIVE.MEDIUM
        },
        light: {
            dark: LIGHT.DARK,
            light: LIGHT.LIGHT,
            medium: LIGHT.MEDIUM
        },
        grey: GREY,
        black: BLACK,
        white: LIGHT.LIGHT,
        divider: LIGHT.DARK,
        error: NEGATIVE.DARK,
        success: POSITIVE.MEDIUM,
        warning: NEGATIVE.MEDIUM
    }
};

export default THEME;
