//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { LEFT, RIGHT } = ALIGN;

const {
    LIGHT: { LIGHT }
} = COLOR;

const useStyles = () =>
    StyleSheet.create({
        fullModal: {
            margin: 0
        },
        container: {
            flex: 1,
            margin: 0,
            borderRadius: 2,
            backgroundColor: LIGHT
        },
        radius: {
            borderRadius: 5
        },
        header: {
            padding: 10,
            paddingBottom: 0,
            flexDirection: 'row'
        },
        alignLeft: {
            ...LEFT
        },
        alignRight: {
            ...RIGHT
        }
    });

export default useStyles;
