//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            padding: 2,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'red'
        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
