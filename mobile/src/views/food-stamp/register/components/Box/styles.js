
//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        box: {

            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 8,
            padding: 2,
        },
        textBox: {
            fontSize: 16,
            ...ALIGN.CENTER,
            ...FONT.REGULAR
        },

    });

export default useStyles;
