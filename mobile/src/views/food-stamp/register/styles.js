//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',

            ...MARGIN.F_FORM,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        viewPeso: {
            flexDirection: 'row',
            marginTop: 25,
        },
        viewQtd: {
            flexDirection: 'row',
        },
        viewFooter: {
            justifyContent: 'space-between',
            marginTop: 178,
        },
        footer: {
            fontSize: 16,
            ...ALIGN.CENTER
        },
        button: {
            paddingTop: 20,
        }

    });

export default useStyles;
