//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';
import { ELEMENTS_THEME_LIGHT } from './../../utils/constants/theme/elements-theme';

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
        },
        containerStyle: {
            backgroundColor: ELEMENTS_THEME_LIGHT.colors.light.dark,
            margin: 20,
            padding: 20,
            borderRadius: 20,
            elevation: 10
        },
        backIcon: {
            fontSize: 20
        }
    });

export default useStyles;
