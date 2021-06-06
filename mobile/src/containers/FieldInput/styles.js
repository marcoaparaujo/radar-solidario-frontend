//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { RIGHT } = ALIGN;
const { LIGHT, PRIMARY, POSITIVE, NEGATIVE } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            width: '100%',
            paddingLeft: 0,
            paddingRight: 0
        },
        input: {
            height: 47,
            width: '100%',
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 3,
            borderColor: PRIMARY.DARK,
            backgroundColor: LIGHT.LIGHT,
            outlineColor: POSITIVE.MEDIUM
        },
        inputContainer: {
            width: '100%',
            borderBottomWidth: 0,
            borderColor: 'transparent'
        },
        error: {
            margin: 0,
            fontSize: 14,
            marginTop: 5,
            width: '100%',
            marginBottom: 5,
            color: NEGATIVE.DARK,
            ...RIGHT,
            ...FONT.MEDIUM
        }
    });

export default useStyles;
