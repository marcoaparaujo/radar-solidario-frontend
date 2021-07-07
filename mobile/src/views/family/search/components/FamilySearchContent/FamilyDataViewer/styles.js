//#region Imports

import FONT from 'assets/styles/font';
import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN.LEFT
        },
        label: {
            marginTop: 5,
            marginRight: 3,
            ...FONT.BOLD
        },
        text: {
            fontSize: 16
        }
    });
export default useStyles;
