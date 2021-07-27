//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: '100%',
            ...MARGIN.F_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        header: {
            marginBottom: 'auto'
        },
        viewPeso: {
            flexDirection: 'row',
            marginTop: 25
        },
        viewQtd: {
            flexDirection: 'row'
        },
        footer: {
            fontSize: 16,
            ...ALIGN.CENTER
        },
        button: {
            paddingTop: 20
        }
    });

export default useStyles;
