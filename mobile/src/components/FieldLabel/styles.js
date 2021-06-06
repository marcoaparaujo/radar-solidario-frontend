//#region Imports

import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';
import FONT from 'assets/styles/font';

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
            color: NEGATIVE.MEDIUM
        }
    });

export default useStyles;
