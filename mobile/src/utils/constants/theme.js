//#region Imports

import COLOR from 'assets/styles/color';

//#endregion

const { LIGHT, PRIMARY, POSITIVE, NEGATIVE, SECONDARY } = COLOR;

const THEME = {
    Icon: {
        size: 18,
        solid: true,
        color: POSITIVE.MEDIUM,
        type: 'font-awesome-5'
    },
    colors: {
        white: LIGHT.LIGHT,
        black: PRIMARY.DARK,
        error: NEGATIVE.DARK,
        primary: PRIMARY.MEDIUM,
        success: POSITIVE.MEDIUM,
        divider: SECONDARY.LIGHT,
        warning: SECONDARY.MEDIUM,
        secondary: SECONDARY.MEDIUM
    }
};

export default THEME;
