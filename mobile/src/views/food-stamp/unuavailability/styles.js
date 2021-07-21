//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            ...MARGIN.F_FORM,
        },
        viewFooter: {
            marginBottom: 52,
            marginTop: 201,
        },
        footer: {

            fontSize: 16,
            ...ALIGN.CENTER
        },

    });

export default useStyles;
