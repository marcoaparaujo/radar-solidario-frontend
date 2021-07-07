//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        text: {
            fontSize: 16,
            marginBottom: 10,
            ...FONT.MEDIUM
        }
    });

export default useStyles;
