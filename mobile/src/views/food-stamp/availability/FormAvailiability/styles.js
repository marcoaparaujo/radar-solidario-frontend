//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        row: {
            ...ALIGN.LEFT
        },
        info: {
            fontSize: 16,
            marginBottom: 12,
            ...FONT.BOLD
        },
        checkboxContainer: {
            marginLeft: 0,
            paddingLeft: 0,
            backgroundColor: 'white',
            borderColor: 'transparent'
        }
    });

export default useStyles;
