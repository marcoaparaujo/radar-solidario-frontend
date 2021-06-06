//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { REGULAR } = FONT;

const useStyles = () =>
    StyleSheet.create({
        view: {
            flex: 1,
            ...REGULAR
        }
    });

export default useStyles;
