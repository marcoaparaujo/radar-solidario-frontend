//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            paddingBottom: 100
        },
        content: {
            flexDirection: 'row'
        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
