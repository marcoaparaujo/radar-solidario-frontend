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
        title: {
            fontSize: 20
        },
        headerStyle: {
            padding: 10,
            alignItems: 'center',
            backgroundColor: '#FFF',
            justifyContent: 'space-between',
            borderTopEndRadius: 5,
            borderTopStartRadius: 5
        },
        header: {
            padding: 10,
            paddingBottom: 0,
            flexDirection: 'row'
        },
        alignLeft: {
            ...ALIGN.LEFT
        },
        alignRight: {
            ...ALIGN.RIGHT
        },
        containerStyle: {
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        backIcon: {
            fontSize: 20,
            marginLeft: 'auto'
        }
    });

export default useStyles;
