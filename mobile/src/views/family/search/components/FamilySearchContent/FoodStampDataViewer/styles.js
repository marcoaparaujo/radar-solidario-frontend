//#region Imports

import FONT from 'assets/styles/font';
import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 20,
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        label: {
            fontSize: 16,
            ...FONT.BOLD
        },
        text: {
            fontSize: 21
        }
    });

export default useStyles;
