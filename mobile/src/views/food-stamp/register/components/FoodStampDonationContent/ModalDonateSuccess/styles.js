//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        containerMain: {
            height: '100%',
            justifyContent: 'space-around'
        },
        container: {
            width: '100%',
            paddingBottom: 100
        },
        content: {
            flexDirection: 'row'
        },
        button: {
            padding: 20
        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
