//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const {
    LIGHT: { LIGHT }
} = COLOR;

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 0,
            borderRadius: 2,
            backgroundColor: LIGHT
        },
        radius: {
            borderRadius: 5
        },
        title: {
            fontSize: 20
        },
        header: {
            padding: 10,
            paddingBottom: 0,
            flexDirection: 'row'
        },
        alignRight: {
            ...ALIGN.RIGHT
        },
        backIcon: {
            fontSize: 20,
            marginLeft: 'auto'
        }
    });

export default useStyles;
