//#region Imports

import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { NEGATIVE } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        label: {
            fontSize: 16,
            marginBottom: 5,
            ...FONT.MEDIUM
        },
        required: {
            marginLeft: 5,
            color: NEGATIVE.MEDIUM
        }
    });

export default useStyles;
