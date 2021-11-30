//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            padding: 20
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        text: {
            fontSize: 16,
            marginLeft: 5
        },
        content: {
            ...ALIGN.LEFT
        }
    });

export default useStyles;
