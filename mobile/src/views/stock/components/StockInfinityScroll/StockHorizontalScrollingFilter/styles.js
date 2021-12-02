//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        text: {
            fontSize: 16,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        name: {
            marginBottom: 10
        }
    });

export default useStyles;
