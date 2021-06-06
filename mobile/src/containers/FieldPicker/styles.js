//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { REGULAR } = FONT;
const { BETWEEN, CENTER, LEFT, RIGHT } = ALIGN;

const {
    LIGHT: { LIGHT },
    PRIMARY: { DARK }
} = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            marginBottom: 5
        },
        content: {
            width: '100%',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: MEDIUM,
            backgroundColor: LIGHT,
            ...BETWEEN
        },
        containerPicker: {
            width: '100%',
            borderRadius: 4,
            ...CENTER
        },
        icon: {
            marginLeft: 8,
            ...LEFT
        },
        picker: {
            height: 50,
            fontSize: 18,
            width: '100%',
            backgroundColor: LIGHT,
            borderColor: 'transparent',
            ...REGULAR
        },
        item: {
            color: DARK
        },
        loader: {
            color: DARK,
            marginLeft: 8,
            marginRight: 8,
            ...RIGHT
        }
    });

export default useStyles;
