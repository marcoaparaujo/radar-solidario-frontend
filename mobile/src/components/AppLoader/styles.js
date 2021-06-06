//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { LIGHT, POSITIVE } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            ...ALIGN.CENTER,
            flexDirection: 'column',
            backgroundColor: LIGHT.DARK
        },
        image: {
            width: 250,
            height: 250,
            resizeMode: 'cover'
        },
        loader: {
            color: POSITIVE.MEDIUM
        }
    });

export default useStyles;
