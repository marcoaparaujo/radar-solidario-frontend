//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        critical: {
            width: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        foodStamp: {
            marginBottom: 20
        },
        info: {
            marginVertical: 10
        },
        button: {
            margin: 10,
            padding: 10,
            paddingBottom: 40,
            borderRadius: 8
        },
        mainView: {
            justifyContent: 'center',
            margin: 10
        },
        aboveView: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
        },
        underView: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        aboveTextOne: {
            fontSize: 20
        },
        underTextOne: {
            fontSize: 20
        },
        aboveTextTwo: {
            fontSize: 16
        },
        underTextTwo: {
            fontSize: 16
        }
    });

export default useStyles;
