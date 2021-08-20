//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 10,
            justifyContent: 'center'
        },
        topContent: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        bottomContent: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 20
        },
        text: {
            fontSize: 16
        },
        button: {
            margin: 10,
            padding: 10,
            borderRadius: 8,
            paddingBottom: 40
        }
    });

export default useStyles;
