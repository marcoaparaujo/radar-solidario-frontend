//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        info: {
            fontSize: 16,
            marginBottom: 12,
            ...FONT.BOLD
        },
        text: {
            fontSize: 16,
            marginTop: 10,
            ...FONT.REGULAR
        }
    });

export default useStyles;
