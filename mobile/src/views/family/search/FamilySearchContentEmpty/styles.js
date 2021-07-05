//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        text: {
            fontSize: 16,
            marginBottom: 10,
            ...FONT.MEDIUM
        }
    });

export default useStyles;
